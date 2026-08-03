import { APP_ROUTES } from "@/config/Routes";
import { slugify } from "@/utils/slugify";
import { defaultLocale, type Locale } from "@/i18n/ui";

export const generateResourcePath = (
  category: string,
  locale: Locale = defaultLocale,
) => {
  return `/${locale}${APP_ROUTES.RESOURCES}?category=${encodeURIComponent(category)}`;
};

export const generateUsecasePath = (
  usecase: string,
  locale: Locale = defaultLocale,
) => {
  return `/${locale}/${APP_ROUTES.USECASES(slugify(usecase))}`;
};

export const generateEventPath = (
  event: string,
  locale: Locale = defaultLocale,
) => {
  return `/${locale}/${APP_ROUTES.EVENTS(slugify(event))}`;
};
