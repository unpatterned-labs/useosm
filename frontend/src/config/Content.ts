import type { AppConfigType } from "src/types/content";
import { eventsContent } from "@/i18n/content/events";
import { usecasesContent } from "@/i18n/content/usecases";
import { resourcesContent } from "@/i18n/content/resources";
import { homeContent } from "@/i18n/content/home";
import { siteContent } from "@/i18n/content/site";
import AllResources from "./../content/osm_resources.json";

export const APP_CONTENT: AppConfigType = {
  USECASES: usecasesContent.en,
  RESOURCES: {
    route: resourcesContent.en.route,
    title: resourcesContent.en.title,
    children: resourcesContent.en.children,
  },
  EVENTS: eventsContent.en,
  HOME_PAGE: homeContent.en,
  RESOURCES_PAGE: {
    ...resourcesContent.en.page,
    resourcesList: AllResources,
    osm_app_catalog_url: "https://osm-apps.org/?page=app&app=",
  },
  announcementContent: siteContent.en.announcementContent,
  EXPLORE_OSM: siteContent.en.exploreOsm,
  LANGUAGES: [
    {
      language: "English",
      locale: "en",
      supported: true,
    },
    {
      language: "Français",
      locale: "fr",
      supported: true,
    },
  ],
  TAGLINE: siteContent.en.tagline,
  COPYRIGHT: siteContent.en.copyright,
  BUY_US_A_COFFEE: {
    text: siteContent.en.buyUsACoffeeText,
    link: "https://buymeacoffee.com/useosm",
  },
  SOCIALS: {
    GitHub: "https://github.com/unpatterned-labs/useosm",
  },
  MAP_CONFIG: {
    style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
    maxZoomLevel: 14,
    minZoomLevel: 3,
    control: {
      layout: siteContent.en.mapControls,
    },
  },
};
