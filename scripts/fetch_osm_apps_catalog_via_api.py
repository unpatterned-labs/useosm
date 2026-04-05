import argparse
import html
import json
import logging
import re
from datetime import datetime
from pathlib import Path
from typing import Any
from urllib.request import Request, urlopen

LOGGER = logging.getLogger("osm_apps_catalog")

CATEGORY_KEYWORDS: list[tuple[str, tuple[str, ...]]] = [
    ("Editors", ("editor", "editor tool", "edit", "editing", "osm file editor")),
    (
        "Navigation",
        (
            "navi",
            "navigation",
            "router",
            "routing",
            "route planner",
            "routing engine",
            "directions",
            "gps",
            "turn-by-turn",
            "isochrone",
            "osrm",
            "valhalla",
            "graphhopper",
            "brouter",
        ),
    ),
    (
        "Map Visualization",
        (
            "display",
            "renderer",
            "rendering",
            "slippy map",
            "tile layer",
            "vector tiles",
            "map visualization",
            "map viewer",
            "cartography",
            "map style",
            "openlayers",
            "leaflet",
            "maplibre",
            "mapbox",
            "mapnik",
            "interactive web maps",
            "3d viewer",
        ),
    ),
    ("Data Analytics", ("analytics", "data analytics", "business intelligence", "data science", "dashboard")),
    (
        "Data Extraction and Analysis",
        (
            "analyser",
            "analyze",
            "analyse",
            "analysis",
            "qa",
            "quality",
            "quality control",
            "data extraction",
            "extract",
            "converter",
            "overpass",
            "nominatim",
            "geocoder",
            "geocoding",
            "query",
            "statistics",
            "monitoring",
            "gis",
            "postgis",
        ),
    ),
    ("Libraries", ("library", "sdk", "framework", "module", "plugin", "bindings", "api", "cli tool")),
    ("User Interaction", ("interaction", "collaboration", "community", "social", "chat", "welcoming tool")),
    (
        "Mobile",
        (
            "android",
            "ios",
            "mobile",
            "windows phone",
            "windows mobile",
            "huawei",
            "kaios",
            "watchos",
            "tvos",
            "visionos",
        ),
    ),
]

MOBILE_INSTALL_FIELDS = ("fDroidID", "googlePlayID", "huaweiAppGalleryID", "appleStoreID")

ISO_DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
HTML_TAG_RE = re.compile(r"<[^>]+>")
WS_RE = re.compile(r"\s+")
FIRST_SENTENCE_RE = re.compile(r"^(.+?[.!?])(?:\s|$)")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Fetch and transform OSM apps catalog from API.")
    parser.add_argument("-y", "--yes", action="store_true", help="Compatibility flag (no prompt in this script).")
    parser.add_argument("-v", "--verbose", action="store_true", help="Enable verbose debug logging.")
    parser.add_argument("--api-url", default="https://osm-apps.org/api/apps/all.json", help="Source API URL.")
    parser.add_argument(
        "--output",
        default="data/osm_resources.json",
        help="Output JSON path (relative paths resolve from repository root).",
    )
    parser.add_argument("--timeout", default=30, type=int, help="HTTP timeout in seconds.")
    parser.add_argument("--indent", default=2, type=int, help="JSON indent size.")
    return parser.parse_args()


def repository_root() -> Path:
    return Path(__file__).resolve().parents[1]


def resolve_output_path(output: str) -> Path:
    output_path = Path(output)
    return output_path if output_path.is_absolute() else repository_root() / output_path


def normalize_text(value: Any) -> str:
    if not isinstance(value, str):
        return ""
    unescaped = html.unescape(value)
    no_tags = HTML_TAG_RE.sub(" ", unescaped)
    return WS_RE.sub(" ", no_tags).strip()


def first_sentence(text: str) -> str:
    cleaned = normalize_text(text)
    if not cleaned:
        return ""
    match = FIRST_SENTENCE_RE.search(cleaned)
    return match.group(1).strip() if match else cleaned


def slugify(text: str) -> str:
    slug = text.lower().replace("&", " and ").strip()
    slug = re.sub(r"[^\w\s-]", "", slug)
    slug = re.sub(r"[\s_-]+", "-", slug)
    slug = re.sub(r"^-+|-+$", "", slug)
    return slug


def is_valid_iso_date(value: Any) -> bool:
    if not isinstance(value, str) or not ISO_DATE_RE.match(value):
        return False
    try:
        datetime.strptime(value, "%Y-%m-%d")
        return True
    except ValueError:
        return False


def extract_last_updated(app: dict[str, Any]) -> str:
    last_release = app.get("lastRelease")
    if is_valid_iso_date(last_release):
        return str(last_release)

    last_focus = app.get("lastFocus")
    if isinstance(last_focus, str) and len(last_focus) >= 10:
        candidate = last_focus[:10]
        if is_valid_iso_date(candidate):
            return candidate
    return ""


def pick_image(app: dict[str, Any]) -> str:
    for key in ("logos", "images"):
        value = app.get(key)
        if isinstance(value, list):
            for image in value:
                cleaned = normalize_text(image)
                if cleaned:
                    return cleaned

    website = normalize_text(app.get("website"))
    if website.startswith(("http://", "https://")):
        return website.rstrip("/") + "/favicon.ico"
    return ""


def has_mobile_install_ids(app: dict[str, Any]) -> bool:
    install = app.get("install")
    if not isinstance(install, dict):
        return False
    return any(normalize_text(install.get(field)) for field in MOBILE_INSTALL_FIELDS)


def build_signal_text(app: dict[str, Any]) -> str:
    tokens: list[str] = []

    name = normalize_text(app.get("name"))
    if name:
        tokens.append(name)

    for key in ("genre", "topics", "platform", "programmingLanguages"):
        values = app.get(key)
        if isinstance(values, list):
            for value in values:
                token = normalize_text(value)
                if token:
                    tokens.append(token)

    return " ".join(tokens).lower()


def map_category(app: dict[str, Any]) -> str:
    signal_text = build_signal_text(app)
    matches: dict[str, bool] = {}

    for category, keywords in CATEGORY_KEYWORDS:
        if category == "Mobile":
            matches[category] = any(keyword in signal_text for keyword in keywords) or has_mobile_install_ids(app)
            continue
        matches[category] = any(keyword in signal_text for keyword in keywords)

    # Ambiguous apps that are both editors and full navigation tools should resolve to navigation.
    if matches.get("Editors") and matches.get("Navigation"):
        return "Navigation"

    for category, _ in CATEGORY_KEYWORDS:
        if matches.get(category):
            return category

    return ""


def fetch_apps(api_url: str, timeout: int) -> list[dict[str, Any]]:
    request = Request(api_url, headers={"User-Agent": "useosm-osm-apps-catalog-fetcher/1.0"})
    with urlopen(request, timeout=timeout) as response:
        payload = response.read()
    decoded = json.loads(payload)
    if not isinstance(decoded, list):
        raise ValueError("API response is not a list.")
    return [item for item in decoded if isinstance(item, dict)]


def safe_title(app: dict[str, Any]) -> str:
    return normalize_text(app.get("name"))


def extract_score(app: dict[str, Any]) -> float:
    value = app.get("score")
    if isinstance(value, bool):
        return 0.0
    if isinstance(value, (int, float)):
        return float(value)
    if isinstance(value, str):
        try:
            return float(value.strip())
        except ValueError:
            return 0.0
    return 0.0


def extract_website(app: dict[str, Any]) -> str:
    website = normalize_text(app.get("website"))
    return website if website.startswith(("http://", "https://")) else ""


def build_description(app: dict[str, Any]) -> str:
    long = normalize_text(app.get("description"))
    short = normalize_text(app.get("descriptionShort"))
    if long:
        return long
    return short


def unique_slug(base_slug: str, app: dict[str, Any], index: int, used: set[str]) -> str:
    slug = base_slug or f"app-{app.get('id') or index}"
    if slug not in used:
        used.add(slug)
        return slug

    identifier = normalize_text(app.get("id"))
    fallback = identifier if identifier else str(index)
    candidate = f"{slug}-{fallback}"
    if candidate not in used:
        used.add(candidate)
        return candidate

    suffix = 2
    while f"{candidate}-{suffix}" in used:
        suffix += 1
    final_slug = f"{candidate}-{suffix}"
    used.add(final_slug)
    return final_slug


def transform_apps(apps: list[dict[str, Any]]) -> list[dict[str, Any]]:
    transformed: list[dict[str, Any]] = []
    used_slugs: set[str] = set()

    for index, app in enumerate(apps):
        if app.get("unmaintained") is True:
            continue

        score = extract_score(app)
        if score <= 4.0:
            continue

        category = map_category(app)
        if not category:
            continue

        title = safe_title(app)
        if not title:
            continue

        slug = unique_slug(slugify(title), app, index, used_slugs)
        transformed.append(
            {
                "title": title,
                "category": category,
                "slug": slug,
                "image": pick_image(app),
                "website": extract_website(app),
                "description": build_description(app),
                "score": score,
                "lastUpdated": extract_last_updated(app),
            }
        )

    transformed.sort(key=lambda item: (item["title"].casefold(), item["slug"]))
    return transformed


def write_json_atomic(path: Path, data: list[dict[str, Any]], indent: int) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = path.with_name(f"{path.name}.tmp")
    with tmp_path.open("w", encoding="utf-8", newline="\n") as handle:
        json.dump(data, handle, ensure_ascii=False, indent=indent)
        handle.write("\n")
    tmp_path.replace(path)


def main() -> None:
    args = parse_args()
    log_level = logging.DEBUG if args.verbose else logging.INFO
    logging.basicConfig(level=log_level, format="%(asctime)s %(name)s %(levelname)s: %(message)s")

    output_path = resolve_output_path(args.output)
    LOGGER.info("Fetching OSM apps from %s", args.api_url)
    apps = fetch_apps(args.api_url, args.timeout)
    LOGGER.info("Fetched %d apps", len(apps))

    resources = transform_apps(apps)
    LOGGER.info("Transformed %d apps into resources", len(resources))

    write_json_atomic(output_path, resources, args.indent)
    LOGGER.info("Wrote resource catalog to %s", output_path)


if __name__ == "__main__":
    main()
