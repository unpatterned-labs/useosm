import { APP_CONTENT } from "@/config/Content";
import { Translator } from "./translator";
import type { ExploreOSMSection, NavItem } from "src/types/content";

export const FooterColumn = ({
  section,
  isWide,
}: {
  section: NavItem | ExploreOSMSection;
  isWide?: boolean;
}) => (
  <div
    className={`flex w-full flex-col gap-y-4 md:col-span-2 ${isWide ? "md:col-span-3" : ""}`}
  >
    <p className="text-sm font-semibold text-white">{section.title}</p>
    <ul className="flex flex-col gap-y-4">
      {section.children.map((link, idx) => (
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
    {section.title === APP_CONTENT.RESOURCES.title && <Translator />}
  </div>
);
