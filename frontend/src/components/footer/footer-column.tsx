import { Translator } from "./translator";
import type { ExploreOSMSection, NavChild, NavItem } from "src/types/content";
import type { Locale } from "@/i18n/ui";

export type FooterColumnKind = "usecases" | "explore" | "resources";

export const FooterColumn = ({
  section,
  kind,
  isWide,
  currentLocale,
  currentPath,
}: {
  section: NavItem | ExploreOSMSection;
  kind: FooterColumnKind;
  isWide?: boolean;
  currentLocale?: Locale;
  currentPath?: string;
}) => {
  const visibleLinks = section.children.filter((link) => {
    const typedLink = link as NavChild;
    return kind === "usecases" ? typedLink.active : true;
  });

  return (
    <div
      className={`flex w-full flex-col gap-y-4 md:col-span-2 ${isWide ? "md:col-span-3" : ""}`}
    >
      <p className="text-sm font-semibold text-white">{section.title}</p>
      <ul className="flex flex-col gap-y-4">
        {visibleLinks.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href ?? link.route}
              target={link.isHref ? "_blank" : "_self"}
              rel={link.isHref ? "noopener noreferrer" : undefined}
              className="text-grey-75 text-sm font-medium transition-colors hover:text-white"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      {kind === "resources" && currentLocale && currentPath && (
        <Translator currentLocale={currentLocale} currentPath={currentPath} />
      )}
    </div>
  );
};
