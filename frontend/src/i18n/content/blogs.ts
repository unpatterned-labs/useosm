import type { EventsContentType } from "src/types/content";
import { generateBlogPath } from "src/helpers/generatePath";
import type { Locale } from "@/i18n/ui";

export const blogsContent: Record<Locale, EventsContentType> = {
  en: {
    route: "",
    title: "Blogs",
    children: [
      {
        route: generateBlogPath("/mapkathon-2026-winners", "en"),
        title: "Mapkathon 2026 Winners",
        description: "Announcing the winners of Mapkathon 2026",
        isHref: false,
        active: true,
      },
      {
        route: generateBlogPath("/mapkaton-2026", "en"),
        title: "Mapkathon 2026",
        description: "Using OpenStreetMap Data for the community",
        isHref: false,
        active: true,
      },
    ],
    announcement: {
      title: "Map<>Kathon Winners",
      description:
        "Checkout Winners Submissions of UseOSM Map <> Kathon 2026 Challenge",
      link: generateBlogPath("/mapkathon-2026-winners", "en"),
    },
  },
  fr: {
    route: "",
    title: "Blogues",
    children: [
      {
        route: generateBlogPath("/mapkathon-2026-winners", "fr"),
        title: "Gagnants du Mapkathon 2026",
        description: "Annonce des gagnants du Mapkathon 2026",
        isHref: false,
        active: true,
      },
      {
        route: generateBlogPath("/mapkaton-2026", "fr"),
        title: "Mapkathon 2026",
        description: "Utiliser les données OpenStreetMap pour la communauté",
        isHref: false,
        active: true,
      },
    ],
    announcement: {
      title: "Map<>Kathon Winners",
      description:
        "Découvrez les soumissions gagnantes du défi Map <> Kathon 2026 de UseOSM",
      link: generateBlogPath("/mapkathon-2026-winners", "fr"),
    },
  },
};
