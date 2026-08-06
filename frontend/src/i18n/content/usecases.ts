import type { NavItem } from "src/types/content";
import { generateUsecasePath } from "src/helpers/generatePath";
import type { Locale } from "@/i18n/ui";

export const usecasesContent: Record<Locale, NavItem> = {
  en: {
    route: "",
    title: "Usecases",
    children: [
      {
        title: "Disaster Response & Humanitarian Aid",
        description:
          "How HOT, Missing Maps, and NGOs use OSM to respond to emergencies, map vulnerable areas, and plan logistics.",
        route: generateUsecasePath(
          "Disaster Response & Humanitarian Aid",
          "en",
        ),
        active: true,
      },
      {
        title: "Urban Planning",
        description:
          "City governments and researchers using OSM for planning, zoning, or policy analysis.",
        route: generateUsecasePath("Urban Planning", "en"),
        active: true,
      },
      {
        title: "Education & Research",
        description:
          "How universities and students use OSM in classrooms, thesis work, and citizen science.",
        route: generateUsecasePath("Education & Research", "en"),
        active: true,
      },
      {
        title: "Mobility & Transport",
        description:
          "Ride-sharing, routing, bike networks, accessibility, and how tools like GraphHopper, Valhalla, and OsmAnd power them.",
        route: generateUsecasePath("Mobility & Transport", "en"),
        active: true,
      },
      {
        title: "Environment & Climate",
        description:
          "Deforestation, climate monitoring, biodiversity tracking. Show examples using OSM + satellite imagery.",
        route: generateUsecasePath("Environment & Climate", "en"),
        active: true,
      },
      {
        title: "Navigation & Location Services",
        description:
          "Tech companies building navigation apps or local services using OSM data.",
        route: generateUsecasePath("Navigation & Location Services", "en"),
        active: true,
      },
    ],
  },
  fr: {
    route: "",
    title: "Cas d'usage",
    children: [
      {
        title: "Réponse aux catastrophes et aide humanitaire",
        description:
          "Comment HOT, Missing Maps et les ONG utilisent OSM pour répondre aux urgences, cartographier les zones vulnérables et planifier la logistique.",
        route: generateUsecasePath(
          "Disaster Response & Humanitarian Aid",
          "fr",
        ),
        active: true,
      },
      {
        title: "Urbanisme",
        description:
          "Collectivités et chercheurs utilisant OSM pour la planification urbaine, le zonage ou l'analyse des politiques publiques.",
        route: generateUsecasePath("Urban Planning", "fr"),
        active: true,
      },
      {
        title: "Éducation et recherche",
        description:
          "Comment les universités et les étudiants utilisent OSM en classe, dans leurs travaux de recherche et en science participative.",
        route: generateUsecasePath("Education & Research", "fr"),
        active: true,
      },
      {
        title: "Mobilité et transport",
        description:
          "Covoiturage, calcul d'itinéraires, réseaux cyclables, accessibilité, et comment des outils comme GraphHopper, Valhalla et OsmAnd s'appuient sur OSM.",
        route: generateUsecasePath("Mobility & Transport", "fr"),
        active: true,
      },
      {
        title: "Environnement et climat",
        description:
          "Déforestation, suivi climatique, surveillance de la biodiversité. Exemples combinant OSM et imagerie satellite.",
        route: generateUsecasePath("Environment & Climate", "fr"),
        active: true,
      },
      {
        title: "Navigation et services de localisation",
        description:
          "Entreprises technologiques qui développent des applications de navigation ou des services locaux à partir des données OSM.",
        route: generateUsecasePath("Navigation & Location Services", "fr"),
        active: true,
      },
    ],
  },
};
