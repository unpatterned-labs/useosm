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
  HowOSMWorks: {
    title: string;
    tagline: string;
    steps: Array<{
      title: string;
      description: string;
      image: string;
    }>;
    actions: {
      title: string;
      downloadEbook: {
        text: string;
        link: string;
      };
      watchVideo: {
        text: string;
        link: string;
      };
      getStarted: {
        text: string;
        link: string;
      };
    };
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
  resourcesList: ResourceItem[];
};

export enum ResourceCategory {
  ALL = "All",
  EDITORS = "Editors",
  DATA_EXTRACTION_AND_ANALYSIS = "Data Extraction and Analysis",
  MAP_VISUALIZATION_STACK = "Map Visualization",
  DATA_ANALYTICS = "Data Analytics",
  USER_INTERACTION = "User Interaction",
  LIBRARIES = "Libraries",
  NAVIGATION = "Navigation",
  MOBILE = "Mobile",
}

export type ResourceItem = {
  title: string;
  category: ResourceCategory;
  slug: string;
  image: string;
  description?: string;
  lastUpdated?: string;
  content?: string;
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
