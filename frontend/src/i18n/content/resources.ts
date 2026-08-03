import { ResourceCategory, type ResourcesContentType } from "src/types/content";
import { generateResourcePath } from "src/helpers/generatePath";
import type { Locale } from "@/i18n/ui";

export const resourcesContent: Record<Locale, ResourcesContentType> = {
  en: {
    route: "",
    title: "Resources",
    children: [
      {
        title: "Editors",
        route: generateResourcePath(ResourceCategory.EDITORS, "en"),
        description: "Discover the editors for OpenStreetMap data.",
        active: true,
      },
      {
        title: "Data Extraction and Analysis",
        route: generateResourcePath(
          ResourceCategory.DATA_EXTRACTION_AND_ANALYSIS,
          "en",
        ),
        description:
          "Explore tools for extracting and analyzing OpenStreetMap data.",
        active: true,
      },
      {
        title: "Libraries",
        route: generateResourcePath(ResourceCategory.LIBRARIES, "en"),
        description: "Find libraries to work with OpenStreetMap data.",
        active: true,
      },
      {
        title: "Map Visualization Stack",
        route: generateResourcePath(
          ResourceCategory.MAP_VISUALIZATION_STACK,
          "en",
        ),
        description:
          "Discover tools for visualizing OpenStreetMap data on maps.",
        active: true,
      },
      {
        title: "Navigation & Mobile Framework",
        route: generateResourcePath(ResourceCategory.NAVIGATION, "en"),
        description:
          "Explore navigation and mobile frameworks for OpenStreetMap.",
        active: true,
      },
    ],
    page: {
      title: "Resources",
      description: "Discover Tools Built With and For OpenStreetMap",
      Hero: {
        title: "Discover Tools Built With and For OpenStreetMap",
        description: "Data from OSM Apps Catalog",
      },
      search: {
        placeholder: "Search...",
      },
    },
  },
  fr: {
    route: "",
    title: "Ressources",
    children: [
      {
        title: "Éditeurs",
        route: generateResourcePath(ResourceCategory.EDITORS, "fr"),
        isHref: true,
      },
      {
        title: "Extraction et analyse de données",
        route: generateResourcePath(
          ResourceCategory.DATA_EXTRACTION_AND_ANALYSIS,
          "fr",
        ),
        isHref: true,
      },
      {
        title: "Bibliothèques",
        route: generateResourcePath(ResourceCategory.LIBRARIES, "fr"),
        isHref: true,
      },
      {
        title: "Visualisation cartographique",
        route: generateResourcePath(
          ResourceCategory.MAP_VISUALIZATION_STACK,
          "fr",
        ),
        isHref: false,
      },
      {
        title: "Navigation et frameworks mobiles",
        route: generateResourcePath(ResourceCategory.NAVIGATION, "fr"),
        isHref: true,
      },
    ],
    page: {
      title: "Ressources",
      description: "Découvrez des outils conçus avec et pour OpenStreetMap",
      Hero: {
        title: "Découvrez des outils conçus avec et pour OpenStreetMap",
        description: "Données issues du catalogue d'applications OSM",
      },
      search: {
        placeholder: "Rechercher...",
      },
    },
  },
};
