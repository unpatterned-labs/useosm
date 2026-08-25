import type { CollectionEntry, CollectionKey } from "astro:content";
import { defaultLocale, locales, type Locale } from "@/i18n/ui";
import { blogsContent } from "@/i18n/content/blogs";
import { usecasesContent } from "@/i18n/content/usecases";
import { resourcesContent } from "@/i18n/content/resources";
import { homeContent } from "@/i18n/content/home";
import { siteContent } from "@/i18n/content/site";

export const isLocale = (value: string | undefined): value is Locale =>
  locales.includes(value as Locale);

export const getLocale = (currentLocale: string | undefined): Locale =>
  isLocale(currentLocale) ? currentLocale : defaultLocale;

export const getBlogsContent = (locale: string | undefined) =>
  blogsContent[getLocale(locale)];

export const getUsecasesContent = (locale: string | undefined) =>
  usecasesContent[getLocale(locale)];

export const getResourcesContent = (locale: string | undefined) =>
  resourcesContent[getLocale(locale)];

export const getHomeContent = (locale: string | undefined) =>
  homeContent[getLocale(locale)];

export const getSiteContent = (locale: string | undefined) =>
  siteContent[getLocale(locale)];

// language switcher to switch between locales while keeping the same page path
export const switchLocalePath = (pathname: string, target: Locale): string => {
  const segments = pathname.split("/");
  if (isLocale(segments[1])) {
    segments[1] = target;
  } else {
    segments.splice(1, 0, target);
  }
  return segments.join("/") || "/";
};

// Reusable across any locale-filed collection (events, usecases, ...).
export const isEntryForLocale =
  <C extends CollectionKey>(locale: Locale) =>
  (entry: CollectionEntry<C>) =>
    entry.id.startsWith(`${locale}/`);

// Strips the locale folder prefix and file extension back off
export const getEntrySlug = <C extends CollectionKey>(
  entry: CollectionEntry<C>,
) => entry.id.replace(/^[^/]+\//, "").replace(/\.[^./]+$/, "");
