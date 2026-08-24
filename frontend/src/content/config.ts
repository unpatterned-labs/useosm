import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// Blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    publishDate: z.string(),
    dateUpdated: z.string(),
    thumbnail: z.string(),
  }),
});

// Use case collection schema
const useCaseCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    usecase: z.string(),
    description: z.string(),
    CTAText: z.string(),
    CTALink: z.string(),
    heroImagePath: z.string(),
    descriptionSectionHeader: z.string(),
    descriptionSectionSubHeader: z.string(),
    descriptionSectionContent: z.string(),
    usecaseSectionTitle: z.string(),
    callToActionSectionTitle: z.string(),
    callToActionSectionDescription: z.string(),
    CTACard1Title: z.string(),
    CTACard1Description: z.string(),
    CTACard1ButtonText: z.string(),
    CTACard1ButtonLink: z.string(),
    CTACard2Title: z.string(),
    CTACard2Description: z.string(),
    CTACard2ButtonText: z.string(),
    CTACard2ButtonLink: z.string(),
    CTACard3Title: z.string(),
    CTACard3Description: z.string(),
    CTACard3ButtonText: z.string(),
    CTACard3ButtonLink: z.string(),
  }),
});

// Resource collection schema
const resourceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.string(),
    dateUpdated: z.string(),
    link: z.string(),
    thumbnail: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  blogs: blogCollection,
  usecases: useCaseCollection,
  resources: resourceCollection,
};
