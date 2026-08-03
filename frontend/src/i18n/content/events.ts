import type { EventsContentType } from "src/types/content";
import { generateEventPath } from "src/helpers/generatePath";
import type { Locale } from "@/i18n/ui";

export const eventsContent: Record<Locale, EventsContentType> = {
  en: {
    route: "",
    title: "Events",
    children: [
      {
        route: generateEventPath("/mapkaton-2026", "en"),
        title: "MapKaton 2026",
        description: "Using OpenStreetMap Data for the community",
        isHref: false,
        active: true,
      },
    ],
    announcement: {
      title: "Map<>Kathon",
      description:
        "Participate in the useOSM Map <> Kathon 2026 challenge, happening from July 15 to August 21, 2026!",
      link: generateEventPath("/mapkaton-2026", "en"),
    },
  },
  fr: {
    route: "",
    title: "Événements",
    children: [
      {
        route: generateEventPath("/mapkaton-2026", "fr"),
        title: "MapKaton 2026",
        description: "Utiliser les données OpenStreetMap pour la communauté",
        isHref: false,
        active: true,
      },
    ],
    announcement: {
      title: "Map<>Kathon",
      description:
        "Participez au défi useOSM Map <> Kathon 2026, du 15 juillet au 21 août 2026 !",
      link: generateEventPath("/mapkaton-2026", "fr"),
    },
  },
};
