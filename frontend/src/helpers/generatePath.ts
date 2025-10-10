import { APP_ROUTES } from "@/config/Routes";
import { slugify } from "@/utils/slugify";

export const generateResourcePath = (category: string) => {
  return `/${APP_ROUTES.RESOURCES}?category=${encodeURIComponent(category)}`;
};


export const generateUsecasePath = (usecase: string) => {
  return `/${APP_ROUTES.USECASES(slugify(usecase))}`;
};
