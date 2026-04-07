import type { LayerProps, SourceProps } from "@vis.gl/react-maplibre";

export type NavChild = {
  title: string;
  description?: string;
  route?: string;
  isHref?: boolean;
  href?: string;
  active?: boolean;
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
  OSMStats: {
    title: string;
  };
  OSMResources: {
    title: string;
    description: string;
    cta: {
      title: string;
      link: string;
    };
  };
  OrgsUsingOSM: {
    title: string;
    description: string;
    Organizations: Array<{
      name: string;
      image: string;
      link: string;
    }>;
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
  OSMCommunities: {
    title: string;
    map: {
      interactiveLayerIds: string[] | undefined;
      source: SourceProps;
      layer: LayerProps;
      title: string;
    };
  };
};

export type ResourcesPageContent = {
  title: string;
  description: string;
  Hero: {
    title: string;
    description: string;
  };
  search: {
    placeholder: string;
  };
  resourcesList: ResourceItem[];
  osm_app_catalog_url: string;
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
  id: number;
  title: string;
  category: string;
  slug: string;
  image: string;
  website: string;
  description: string;
  score: number;
  lastUpdated: string;
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
  MAP_CONFIG: {
    style: string;
    maxZoomLevel: number;
    minZoomLevel: number;
    control: {
      layout: {
        minimizeLabel: string;
        maximizeLabel: string;
      };
    };
  };
};

export type TOSMStats = {
  apps: number;
  contributors: number;
  countries: number;
  mappedFeatures: number;
  changesets: number;
};

export type UseCaseItemType = {
  title: string;
  description: string;
  link?: string;
  image?: {
    path?: string;
    alt?: string;
  };
  author?: string[];
  source?: {
    name?: string;
    link?: string;
  };
};

export type OSMUsecaseContentsType = {
  [slug: string]: {
    "use-cases": UseCaseItemType[];
  };
};

export type OSMResourcesListType = {
  name: string;
  unmaintained: boolean;
  lastRelease: string;
  description: string;
  images: string[];
  logos: string[];
  imageWiki: string;
  website: string;
  documentation: string;
  source: {
    name: string;
    wiki?: string;
    url: string;
    id?: string;
    language?: string;
    lastChange: string;
    firstCrawled: string;
  }[];
  author: string;
  sourceCode: string;
  programmingLanguages: string[];
  gratis: boolean;
  libre: boolean;
  price: string;
  license: string[];
  languages: string[];
  languagesUrl: string;
  genre: string[];
  topics: string[];
  platform: string[];
  coverage: string[];

  install: {
    fDroidID: string;
    obtainiumLink: string;
    googlePlayID: string;
    huaweiAppGalleryID: string;
    appleStoreID: string;
    macAppStoreID: string;
  };

  map: {
    map: string[];
    mapData: string[];
    datasource: string[];
    rotateMap: string[];
    "3D": string[];
    showWebsite: string[];
    showPhoneNumber: string[];
    showOpeningHours: string[];
  };

  routing: {
    routing: string[];
    createRouteManually: string[];
    calculateRoute: string[];
    createRouteViaWaypoints: string[];
    profiles: string[];
    turnRestrictions: string[];
    calculateRouteOffline: string[];
    routingProviders: string[];
    avoidTraffic: string[];
    trafficProvider: string[];
  };

  navigating: {
    navigating: string[];
    findLocation: string[];
    findNearbyPOI: string[];
    navToPoint: string[];
    voice: string[];
    keepOnRoad: string[];
    turnLanes: string[];
    withoutGPS: string[];
    predefinedRoute: string[];
  };

  tracking: {
    tracking: string[];
    customInterval: string[];
    trackFormats: string[];
    geotagging: string[];
    fastWayPointAdding: string[];
    uploadGPX: string[];
  };

  monitoring: {
    monitoring: string[];
    showTrack: string[];
    showExistingTrack: string[];
    showAltitudeDiagram: string[];
    showDOP: string[];
    showSatellites: string[];
    showNMEAlive: string[];
    showSpeed: string[];
    sendPosition: string[];
  };

  editing: {
    addPOI: string[];
    editPOI: string[];
    addWay: string[];
    editGeom: string[];
    editTags: string[];
    editRelations: string[];
    viewNotes: string[];
    createNotes: string[];
    editNotes: string[];
    editSource: string[];
    offsetDBsupport: string[];
    uploadOSMData: string[];
  };

  rendering: {
    rendererOutputFormats: string[];
  };

  accessibility: {
    accessibility: string[];
    textOnlyUI: string[];
    brailleUI: string[];
    explorerMode: string[];
    publicTransportMode: string[];
    dangerWarnings: string[];
    screenReader: string[];
    screenReaderLang: string[];
  };

  community: {
    matrix: string;
    bluesky: string;
    mastodon: string;
    issueTracker: string;
    githubDiscussions: string;
    telegram: string;
    lemmy: string;
    reddit: string;
  };

  commons: string[];
  videos: string[];

  hasGoal: Record<string, unknown>;

  id: number;
  score: number;
  lastFocus: string;
  lastSpotlight: string;
}[];
