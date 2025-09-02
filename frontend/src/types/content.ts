
export type NavChild = {
  title: string;
  description: string;
  route: string;
}

export type NavItem=  {
  route: string;
  children: NavChild[];
}

export type NavbarConfig = {
  [key: string]: NavItem;
}

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
}

export type ResourcesPageContent = {
  title: string;
  description: string;
  Hero: {
    title: string;
  };
  search: {
    placeholder: string;
  };
}

export type AppConfigType = {
  NAVBAR: NavbarConfig;
  HOME_PAGE: HomePageContent;
  RESOURCES_PAGE: ResourcesPageContent;
  announcementContent: string[];
}
