export type NavChild = {
  title: string;
  description?: string;
  route?: string;
  isHref?: boolean;
  href?: string;
};

export type NavItem = {
  route: string;
  title: string;
  children: NavChild[];
};

export interface HeroContent {
  title: string;
  tagline?: string;
  description?: string;
}

export type HomePageContent = {
  title: string;
  description: string;
  Hero: HeroContent;
  AboutOSM: {
    title: string;
    description: string;
  };
};

export type ResourcesPageContent = {
  title: string;
  description: string;
  Hero: {
    title: string;
  };
  search: {
    placeholder: string;
  };
};

export type ExploreOSMItem = {
  title: string;
  href: string;
  isHref: boolean;
  route?: string;
};

export type ExploreOSMSection = {
  title: string;
  children: ExploreOSMItem[];
};

export type LanguageItem = {
  language: string;
  supported: boolean;
};

export type AppConfigType = {
  USECASES: NavItem;
  RESOURCES: NavItem;
  HOME_PAGE: HomePageContent;
  RESOURCES_PAGE: ResourcesPageContent;
  announcementContent: string[];
  EXPLORE_OSM: ExploreOSMSection;
  LANGUAGES: LanguageItem[];
  TAGLINE: string;
  COPYRIGHT: string;
  BUY_US_A_COFFEE: {
    text: string;
    link: string;
  };
  SOCIALS: {
    GitHub: string;
  };
};
