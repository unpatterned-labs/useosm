import {
  getCategoryLabel,
  ResourceCategory,
  type HomePageContent,
} from "src/types/content";
import type { Locale } from "@/i18n/ui";
import OsmStep1 from "@/assets/images/osm_step_1.jpg";
import OsmStep2 from "@/assets/images/osm_step_2.jpg";
import OsmStep3 from "@/assets/images/osm_step_3.jpg";
import OSM_USING_OSM from "@/content/orgs_using_osm.json";

export const homeContent: Record<Locale, HomePageContent> = {
  en: {
    title: "Home",
    description: "Showcase the use of OpenStreetMap Data",
    Hero: {
      title:
        "The <bolder>Map</bolder> of the <bolder>World</bolder>, <bolder>Built</bolder> by <bolder>Everyone</bolder>.",
      tagline: "Free • Open Source • Community Driven",
      description:
        "OpenStreetMap is the Wikipedia of maps. Join millions of contributors creating the most detailed, up-to-date, and freely available map of the world.",
    },
    AboutOSM: {
      title: "What's OpenStreetMap",
      description:
        "OpenStreetMap is the free, editable map of the world; built by people like you. From remote villages to busy cities, OSM helps power apps, emergency services, transport systems, and more.",
    },
    OrgsUsingOSM: {
      title: "OSM Data is used by top industries around the world",
      description:
        "OpenStreetMap is utilized by leading sectors across the globe, enhancing navigation, logistics, and urban planning, humanitarian response.",
      Organizations: OSM_USING_OSM,
    },
    OSMStats: {
      title: "See how OpenStreetMap is making a difference around the world",
    },
    OSMResources: {
      title: "Explore the OpenStreetMap Toolbelt",
      description:
        "From code libraries to mapping apps, editors to analytics engines. See tools that tap into OSM's global data to help you build, map, and explore the world smarter.",
      cta: {
        title: "Explore All Resources",
        link: "/en/resources",
      },
      resourceCategories: [
        {
          id: 1,
          category: getCategoryLabel(ResourceCategory.EDITORS, "en"),
          description: "Editors are too used to contribute to osm data",
        },
        {
          id: 2,
          category: getCategoryLabel(
            ResourceCategory.DATA_EXTRACTION_AND_ANALYSIS,
            "en",
          ),
          description:
            "Utilities and libraries to query, extract, and analyze raw OpenStreetMap data at scale.",
        },
        {
          id: 3,
          category: getCategoryLabel(
            ResourceCategory.MAP_VISUALIZATION_STACK,
            "en",
          ),
          description:
            "Utilities and libraries to query, extract, and analyze raw OpenStreetMap data at scale.",
        },
        {
          id: 4,
          category: getCategoryLabel(ResourceCategory.LIBRARIES, "en"),
          description:
            "Code libraries in various programming languages to read, write, and manipulate OSM data.",
        },
        {
          id: 5,
          category: getCategoryLabel(ResourceCategory.NAVIGATION, "en"),
          description:
            "Routing engines, on-device libraries, and mobile apps that turn OSM data into turn-by-turn navigation.",
        },
      ],
    },
    HowOSMWorks: {
      tagline: "How OSM Works",
      title: "How to contribute to OpenStreetMap",
      steps: [
        {
          title: "Explore",
          description:
            "Browse the map and find areas that need updating. Missing roads, new buildings, or incorrect information - every contribution matters.",
          image: OsmStep1.src,
        },
        {
          title: "Start Mapping",
          description:
            "Use tools like the iD Editor or JOSM (a more advanced offline editor) to add roads, outline buildings, map paths, and label locations with the correct names.",
          image: OsmStep2.src,
        },
        {
          title: "Upload Changesets",
          description:
            "After making edits, save and upload your changes with a brief description. This instantly improves the global, open-access map data that anyone can use.",
          image: OsmStep3.src,
        },
      ],
      actions: {
        title: "Ready to start contributing ?",
        learn: {
          text: "Learn OSM",
          link: "https://learnosm.org/en/beginner/",
        },
        watchVideo: {
          text: "Watch Tutorial Video",
          link: "https://www.youtube.com/watch?v=MChE1jFThGw",
        },
        getStarted: {
          text: "Start Mapping",
          link: "https://www.openstreetmap.org/",
        },
      },
    },
    OSMCommunities: {
      title: "OpenStreetMap community around the world",
      map: {
        title: "OSM Communities:",
        interactiveLayerIds: ["osm-communities-layer"],
        source: {
          id: "osm-communities",
          type: "geojson",
          data: "https://cdn.jsdelivr.net/npm/osm-community-index@latest/dist/json/completeFeatureCollection.json",
        },
        layer: {
          id: "osm-communities-layer",
          type: "fill",
          paint: {
            "fill-color": "#5c7745",
            "fill-opacity": 0.2,
          },
        },
      },
    },
  },
  fr: {
    title: "Accueil",
    description: "Mettre en valeur l'utilisation des données OpenStreetMap",
    Hero: {
      title:
        "La <bolder>Carte</bolder> du <bolder>Monde</bolder>, <bolder>Construite</bolder> par <bolder>Tous</bolder>.",
      tagline: "Gratuit • Open Source • Porté par la communauté",
      description:
        "OpenStreetMap est le Wikipédia des cartes. Rejoignez des millions de contributeurs qui créent la carte du monde la plus détaillée, la plus à jour et librement accessible.",
    },
    AboutOSM: {
      title: "Qu'est-ce qu'OpenStreetMap",
      description:
        "OpenStreetMap est la carte du monde libre et modifiable, construite par des gens comme vous. Des villages isolés aux grandes villes, OSM alimente des applications, des services d'urgence, des systèmes de transport, et bien plus encore.",
    },
    OrgsUsingOSM: {
      title:
        "Les données OSM sont utilisées par les plus grands secteurs à travers le monde",
      description:
        "OpenStreetMap est utilisé par les principaux secteurs à travers le monde, améliorant la navigation, la logistique, l'urbanisme et la réponse humanitaire.",
      Organizations: OSM_USING_OSM,
    },
    OSMStats: {
      title: "Découvrez l'impact d'OpenStreetMap à travers le monde",
    },
    OSMResources: {
      title: "Explorez la boîte à outils OpenStreetMap",
      description:
        "Des bibliothèques de code aux applications de cartographie, en passant par les éditeurs et les moteurs d'analyse. Découvrez des outils qui exploitent les données mondiales d'OSM pour mieux construire, cartographier et explorer le monde.",
      cta: {
        title: "Explorer toutes les ressources",
        link: "/fr/resources",
      },
      resourceCategories: [
        {
          id: 1,
          category: getCategoryLabel(ResourceCategory.EDITORS, "fr"),
          description: "Editors are too used to contribute to osm data",
        },
        {
          id: 2,
          category: getCategoryLabel(
            ResourceCategory.DATA_EXTRACTION_AND_ANALYSIS,
            "fr",
          ),
          description:
            "Utilities and libraries to query, extract, and analyze raw OpenStreetMap data at scale.",
        },
        {
          id: 3,
          category: getCategoryLabel(
            ResourceCategory.MAP_VISUALIZATION_STACK,
            "fr",
          ),
          description:
            "Utilities and libraries to query, extract, and analyze raw OpenStreetMap data at scale.",
        },
        {
          id: 4,
          category: getCategoryLabel(ResourceCategory.LIBRARIES, "fr"),
          description:
            "Code libraries in various programming languages to read, write, and manipulate OSM data.",
        },
        {
          id: 5,
          category: getCategoryLabel(ResourceCategory.NAVIGATION, "fr"),
          description:
            "Routing engines, on-device libraries, and mobile apps that turn OSM data into turn-by-turn navigation.",
        },
      ],
    },
    HowOSMWorks: {
      tagline: "Comment fonctionne OSM",
      title: "Comment contribuer à OpenStreetMap",
      steps: [
        {
          title: "Explorer",
          description:
            "Parcourez la carte et repérez les zones à mettre à jour. Routes manquantes, nouveaux bâtiments ou informations incorrectes : chaque contribution compte.",
          image: OsmStep1.src,
        },
        {
          title: "Commencer à cartographier",
          description:
            "Utilisez des outils comme l'éditeur iD ou JOSM (un éditeur hors ligne plus avancé) pour ajouter des routes, tracer des bâtiments, cartographier des chemins et nommer correctement les lieux.",
          image: OsmStep2.src,
        },
        {
          title: "Envoyer vos modifications",
          description:
            "Après vos modifications, enregistrez et envoyez vos changements avec une brève description. Cela améliore instantanément les données cartographiques ouvertes que tout le monde peut utiliser.",
          image: OsmStep3.src,
        },
      ],
      actions: {
        title: "Prêt à commencer à contribuer ?",
        learn: {
          text: "Apprenez OSM",
          link: "https://learnosm.org/fr/beginner/",
        },
        watchVideo: {
          text: "Regarder la vidéo tutoriel",
          link: "https://www.youtube.com/watch?v=MChE1jFThGw",
        },
        getStarted: {
          text: "Commencer à cartographier",
          link: "https://www.openstreetmap.org/",
        },
      },
    },
    OSMCommunities: {
      title: "La communauté OpenStreetMap à travers le monde",
      map: {
        title: "Communautés OSM :",
        interactiveLayerIds: ["osm-communities-layer"],
        source: {
          id: "osm-communities",
          type: "geojson",
          data: "https://cdn.jsdelivr.net/npm/osm-community-index@latest/dist/json/completeFeatureCollection.json",
        },
        layer: {
          id: "osm-communities-layer",
          type: "fill",
          paint: {
            "fill-color": "#5c7745",
            "fill-opacity": 0.2,
          },
        },
      },
    },
  },
};
