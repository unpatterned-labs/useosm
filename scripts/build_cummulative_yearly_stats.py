import pyarrow.dataset as ds
import duckdb
# Struggled with this abit.. Because duckdb / arrow use the system timezone database by default
# On systems without a proper timezone database (like Windows), this causes issues when working with timestamps

import os
import tzdata
import argparse
import sys
import logging
from pathlib import Path

# logger for this script
logger = logging.getLogger("osm_changesets")

# warn if a local file is shadowing the installed package
if hasattr(duckdb, "__file__") and Path(duckdb.__file__).resolve().parent == Path(__file__).resolve().parent:
    raise RuntimeError("A local duckdb.py is shadowing the installed duckdb package. Rename/remove it and delete __pycache__.")


START_YEAR = 2004
END_YEAR = 2026

OUT_PATH = Path("data/osm_yearly_stats.json")
OUT_PATH.parent.mkdir(parents=True, exist_ok=True)

logger.info("CWD: %s", os.getcwd())
logger.info("OUT_PATH rel=%s abs=%s", OUT_PATH.as_posix(), str(OUT_PATH.resolve()))

logger.debug("Ensuring tzdata is configured before DuckDB/Arrow interactions")


def parse_args():
    parser = argparse.ArgumentParser(description="Summarize OSM changesets")
    parser.add_argument("-y", "--yes", action="store_true", help="Automatically answer yes to prompts")
    parser.add_argument("-v", "--verbose", action="store_true", help="Enable verbose (debug) logging")
    return parser.parse_args()

def ask_yes_no(prompt: str, default: bool = False, auto_yes: bool = False) -> bool:
    """
    Prompt the user for a yes/no answer.
    If auto_yes is True the function returns True immediately (for non-interactive runs).
    Handles EOFError/KeyboardInterrupt by returning the default value.
    """
    if auto_yes:
        return True
    default_hint = "Y/n" if default else "y/N"
    while True:
        try:
            resp = input(f"{prompt} [{default_hint}] ").strip().lower()
        except (EOFError, KeyboardInterrupt):
            print()
            return default
        if resp == '' and default is not None:
            return default
        if resp in ('y', 'yes'):
            return True
        if resp in ('n', 'no'):
            return False
        print("Please answer 'y' or 'n'.")

## Directly from amazon open data lake orc files
# dataset = ds.dataset("data/osm_changesets_orc", format="orc")
# con = duckdb.connect()
# con.register("changesets", dataset)
# print(con.execute("SELECT COUNT(*) FROM changesets").fetchone())
# con.execute("""
# COPY changesets
# TO 'data/changesets.parquet'
# (FORMAT PARQUET);
# """)


def main():
    args = parse_args()

    # configure logging
    logging.basicConfig(level=logging.DEBUG if args.verbose else logging.INFO, format="%(asctime)s %(name)s %(levelname)s: %(message)s")
    logger.setLevel(logging.DEBUG if args.verbose else logging.INFO)
    logger.info("Starting osm-summary run")

    try:
        # Ensure tzdata is configured before DuckDB/Arrow interactions
        os.environ["TZDIR"] = str(Path(tzdata.__file__).with_name("zoneinfo"))
        os.environ["TZ"] = "UTC"

        with duckdb.connect() as con:
        # path to the parquet file
            parquet_path = Path("data/changesets.parquet")
            exists = parquet_path.exists()
            logger.info(f"Parquet exists: {exists} (path={parquet_path})")

            if exists:
                # Ask user whether to proceed with the parquet file
                proceed = ask_yes_no("Parquet file found. Load from it and continue?", default=True, auto_yes=args.yes)
                if proceed:
                    logger.info("Parquet file found, loading from it.")
                    con.execute("CREATE OR REPLACE VIEW changesets AS SELECT * FROM read_parquet('data/changesets.parquet');")
                else:
                    logger.info("Skipping parquet; falling back to ORC dataset.")
                    dataset = ds.dataset("data/osm_changesets_orc", format="orc")
                    con.register("changesets", dataset)
                    logger.info("Total records in changesets table: %s", con.execute('SELECT COUNT(*) FROM changesets').fetchone())
            else:
                # No parquet: ask whether to continue with ORC dataset or abort
                proceed = ask_yes_no("No parquet file found. Use ORC dataset instead?", default=True, auto_yes=args.yes)
                if not proceed:
                    logger.info("Aborting as requested.")
                    sys.exit(0)
                logger.info("No parquet file found, using raw dataset. Falling back to ORC dataset.")
                dataset = ds.dataset("data/osm_changesets_orc", format="orc")
                con.register("changesets", dataset)
                logger.info("Total records in changesets table: %s", con.execute('SELECT COUNT(*) FROM changesets').fetchone())

            import time

            start_time = time.time()
            
            logger.info("Task: CREATE OR REPLACE VIEW changesets_norm ...")
            
            # Normalize editor string (remove version numbers etc.)
            con.execute(r"""
                CREATE OR REPLACE VIEW changesets_norm AS
                SELECT
                    id,
                    created_at,
                    num_changes,
                    uid,
                    CASE 
                    -- 1. MAPS.ME Exception
                    WHEN lower(tags['created_by']) LIKE 'maps.me%' THEN 'MAPS.ME'

                    -- 1. MAPS.ME Exception
                    WHEN lower(tags['created_by']) LIKE 'streetcomplete%' THEN 'StreetComplete'

                    -- 2. Standardize Rapid/RapiD
                    WHEN lower(tags['created_by']) LIKE '%rapid%' THEN 'RapiD'
                    
                    -- 2. Standardize OsmAnd/RapiD
                    WHEN lower(tags['created_by']) LIKE '%osmand%' THEN 'OsmAnd'

                    -- 2. Standardize Rapid/RapiD
                    WHEN lower(tags['created_by']) LIKE '%go map%' THEN 'Go Map!!'


                    -- 2. Standardize Rapid/RapiD
                    WHEN lower(tags['created_by']) LIKE '%organic maps%' THEN 'Organic Maps'

                    -- 2. Standardize Rapid/RapiD
                    WHEN lower(tags['created_by']) LIKE '%go kaart%' THEN 'Go Kaart'

                    -- 3. Handle URLs (Preserve them)
                    WHEN tags['created_by'] LIKE 'http%' THEN 
                        REGEXP_REPLACE(tags['created_by'], '(/$)', '') -- Just remove trailing slash
                    
                    -- 4. General Cleaning for other editors
                    ELSE 
                        TRIM(
                            REGEXP_REPLACE(
                                REGEXP_REPLACE(
                                    REGEXP_REPLACE(
                                        tags['created_by'], 
                                        '(?i)\s+(android|ios|!!|!! Debug|git#[a-z0-9]+|v?[0-9].*)$', '', 'i'
                                    ), -- Removes OS, Debug tags, git hashes, and version numbers at the end
                                    '[0-9]+\.[0-9]+(\.[0-9]+)?.*', ''
                                ), -- Removes standard version strings (e.g., 1.2.3)
                                '(\s+[\d\.]+|/| \+).*', ''
                            ) -- Removes trailing plus signs, slashes, or space-separated numbers
                        )
                END AS map_editor  
                FROM changesets
                WHERE created_at IS NOT NULL;
            """)

            ## Cumulative version
            osm_stats_query = f"""
            WITH annual_base AS (
            SELECT
                year(created_at) AS year,
                count(*) AS changesets,
                sum(num_changes) AS total_edits,
                count(DISTINCT uid) AS active_mappers
            FROM changesets_norm
            WHERE year(created_at) BETWEEN {START_YEAR} AND {END_YEAR}
            GROUP BY 1
            ),

            new_mapper_counts AS (
            SELECT first_year AS year, count(*) AS new_mappers
            FROM (
                SELECT uid, min(year(created_at)) AS first_year
                FROM changesets_norm
                GROUP BY uid
            )
            WHERE first_year BETWEEN {START_YEAR} AND {END_YEAR}
            GROUP BY 1
            ),
            app_year AS (
            SELECT * FROM (
            SELECT
                year(created_at) AS year,
                map_editor,
                count(*) AS app_changesets
            FROM changesets_norm
            WHERE year(created_at) BETWEEN {START_YEAR} AND {END_YEAR}
                AND map_editor IS NOT NULL
            GROUP BY 1, 2
            )
             WHERE app_changesets >= 10000
            ),

            -- how many distinct qualified apps are active in each year
            apps_year AS (
            SELECT
                year,
                count(DISTINCT map_editor) AS apps
            FROM app_year
            GROUP BY 1
            ),
            apps_first_qualified AS (
            SELECT
                map_editor,
                min(year) AS first_qualified_year
            FROM app_year
            GROUP BY 1
            ),
            apps_cumulative AS (
            SELECT
                y.year,
                count(a.map_editor) AS cum_apps
            FROM (SELECT DISTINCT year FROM annual_base) y
            LEFT JOIN apps_first_qualified a
                ON a.first_qualified_year <= y.year
            GROUP BY 1
            )

            SELECT
            b.year,
            b.changesets,
            b.total_edits,
            b.active_mappers,
            coalesce(n.new_mappers, 0) AS new_mappers,

            coalesce(ay.apps, 0) AS apps,        
            coalesce(ac.cum_apps, 1) AS cum_apps, 

            sum(b.changesets) OVER (ORDER BY b.year) AS cum_changesets,
            sum(coalesce(n.new_mappers, 0)) OVER (ORDER BY b.year) AS cum_contributors,
            sum(b.total_edits) OVER (ORDER BY b.year) AS cum_mappedFeatures
            FROM annual_base b
            LEFT JOIN new_mapper_counts n ON b.year = n.year
            LEFT JOIN apps_year ay ON b.year = ay.year
            LEFT JOIN apps_cumulative ac ON b.year = ac.year
            ORDER BY b.year;

            """
            
            
            logger.info("Executing changesets summary query...")
            df_final = con.execute(osm_stats_query).df()
            # Transform to the requested JSON format:
            # {
            #   "2004": {"changesets": .., "contributors": .., "mappedFeatures": .., "countries": .., "apps": .., "newcontributors": ..},
            #   ...
            # }
            # ... run your query ...
            end_time = time.time()
            logger.info(f"Executing changesets summary query took {end_time - start_time:.2f} seconds")
            import json
            import pandas as pd

            out = {}
            for _, r in df_final.iterrows():
                year = str(int(r['year']))
                out[year] = {
                    'changesets': int(r['cum_changesets']) if pd.notna(r.get('cum_changesets')) else None,
                    'contributors': int(r['cum_contributors']) if pd.notna(r.get('cum_contributors')) else None,
                    'mappedFeatures': int(r['cum_mappedFeatures']) if pd.notna(r.get('cum_mappedFeatures')) else None,
                    # Placeholder: source data doesn't include countries; set to 0 or replace with a computed value
                    'countries': 0,
                    'apps': int(r['cum_apps']) if pd.notna(r.get('cum_apps')) else None,
                    'newcontributors': int(r['new_mappers']) if pd.notna(r.get('new_mappers')) else None,
                }

            logger.debug("Final summary dict created with %d years", len(out))
            json_out = json.dumps(out, indent=2)
            OUT_PATH.write_text(json_out, encoding="utf-8")
            print(json_out)
            

            # Write outputs
            # Atomically write JSON output
            json_path = Path("data/osm_changesets_summary.json")
            json_path.parent.mkdir(parents=True, exist_ok=True)
            
            csv_path = Path("data/osm_changesets_summary.csv")
            csv_path.parent.mkdir(parents=True, exist_ok=True)

            json_tmp = json_path.with_name(json_path.name + ".tmp")
            with open(json_tmp, "w", encoding="utf-8") as f:
                f.write(json_out)
            os.replace(str(json_tmp), str(json_path))
            json_size = os.path.getsize(json_path)
            if OUT_PATH.exists():
                logger.info("Wrote OUT_PATH: %s (abs: %s, bytes: %d)",
                            OUT_PATH.as_posix(), str(OUT_PATH.resolve()), OUT_PATH.stat().st_size)
            else:
                logger.warning("OUT_PATH missing after write attempt: %s (abs: %s)",
                            OUT_PATH.as_posix(), str(OUT_PATH.resolve()))

            # Also write a CSV with renamed columns for convenience (atomic write)
            df_csv = df_final.rename(columns={
                'active_mappers': 'contributors',
                'total_edits': 'mappedFeatures',
                'total_editor': 'apps',
                'new_mappers': 'newcontributors'
            })
            csv_path = Path("osm_changesets_summary.csv")
            csv_tmp = csv_path.with_name(csv_path.name + ".tmp")
            df_csv.to_csv(csv_tmp, index=False)
            #logger.info("Wrote CSV output: %s (%d bytes) — rel: %s, abs: %s", csv_path.name, csv_size, csv_path.as_posix(), str(csv_path.resolve()))
    except Exception:
        logger.exception("Unhandled error in main")
        sys.exit(1)

# con.execute("""
# COPY changesets
# TO 'data/changesets.parquet'
# (FORMAT PARQUET);
# """)

# con.execute("""
# CREATE VIEW changesets_p AS
# SELECT * FROM read_parquet('data/changesets.parquet');
# """)




if __name__ == "__main__":
    main()
