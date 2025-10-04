import type { AppConfigType } from "src/types/content";
import { APP_ROUTES } from "./Routes";

export const APP_CONTENT: AppConfigType = {
  USECASES: {
    route: "",
    title: "Usecases",
    children: [
      {
        title: "Disaster Response & Humanitarian Aid",
        description:
          "How HOT, Missing Maps, and NGOs use OSM to respond to emergencies, map vulnerable areas, and plan logistics.",
        route: APP_ROUTES.USECASES("disaster-response-and-humanitarian-aid"), // we need to review how we want to handle these routes.
      },
      {
        title: "Urban Planning",
        description:
          "City governments and researchers using OSM for planning, zoning, or policy analysis.",
        route: APP_ROUTES.USECASES("urban-planning"),
      },
      {
        title: "Education & Research",
        description:
          "How universities and students use OSM in classrooms, thesis work, and citizen science.",
        route: APP_ROUTES.USECASES("education"),
      },
      {
        title: "Mobility & Transport",
        description:
          "Ride-sharing, routing, bike networks, accessibility, and how tools like GraphHopper, Valhalla, and OsmAnd power them.",
        route: APP_ROUTES.USECASES("mobility"),
      },
      {
        title: "Environment & Climate",
        description:
          "Deforestation, climate monitoring, biodiversity tracking. Show examples using OSM + satellite imagery.",
        route: APP_ROUTES.USECASES("environment-and-climate"),
      },
      {
        title: "Navigation & Location Services",
        description:
          "Tech companies building navigation apps or local services using OSM data.",
        route: APP_ROUTES.USECASES("environment-and-climate"),
      },
    ],
  },
  RESOURCES: {
    title: "Resources",
    route: APP_ROUTES.RESOURCES,
    children: [
      {
        title: "Editors",
        route: "",
        isHref: false,
      },
      {
        title: "Data Extraction and Analysis",
        route: "",
        isHref: false,
      },
      {
        title: "Map Visualization Stack",
        route: "",
        isHref: false,
      },
      {
        title: "Navigation & Mobile Framework",
        route: "",
        isHref: false,
      },
    ],
  },
  HOME_PAGE: {
    title: "Home",
    description: "Showcase the use of OpenStreetMap Data",
    Hero: {
      title:
        "The <bolder>Map</bolder> of the <bolder>World</bolder>, <bolder>Built</bolder> by <bolder>Everyone</bolder>.",
      tagline: "Free • Open Source • Community Driven",
      description:
        "OpenStreetMap is the Wikipedia of maps. Join millions of contributors creating the most detailed, up-to-date, and freely available map of the world.",
    },

    AboutOSM: {
      title: "What's OpenStreetMap",
      description:
        "OpenStreetMap is the free, editable map of the world; built by people like you. From remote villages to busy cities, OSM helps power apps, emergency services, transport systems, and more.",
    },
  },

  RESOURCES_PAGE: {
    title: "Resources",
    description: "Discover Tools Built With and For OpenStreetMap",
    Hero: {
      title: "Discover Tools Built With and For OpenStreetMap",
    },
    search: {
      placeholder: "Search...",
    },
  },
  announcementContent: [
    // State of the Map 2025 Announcement
    `<span class="inline-block ml-2 align-middle">
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2801_5689)">
    <path opacity="0.2" d="M14 6.47723L5.21 3.78098C5.0983 3.7484 4.98055 3.74225 4.86607 3.76303C4.75158 3.78381 4.6435 3.83094 4.55037 3.9007C4.45725 3.97045 4.38163 4.06092 4.32949 4.16494C4.27736 4.26896 4.25015 4.38368 4.25 4.50004V18C4.25015 18.1164 4.27736 18.2311 4.32949 18.3351C4.38163 18.4392 4.45725 18.5296 4.55037 18.5994C4.6435 18.6691 4.75158 18.7163 4.86607 18.737C4.98055 18.7578 5.0983 18.7517 5.21 18.7191L14 16.0229V6.47723Z" fill="#DF1B12"/>
    <path d="M21.71 13.6575C21.8658 13.6121 22.0026 13.5173 22.1 13.3875C22.1974 13.2577 22.25 13.0998 22.25 12.9375V9.5625C22.25 9.40022 22.1974 9.24232 22.1 9.1125C22.0026 8.98268 21.8658 8.88794 21.71 8.8425L5.21 3.78C5.09822 3.7474 4.98039 3.74127 4.86584 3.7621C4.75128 3.78293 4.64315 3.83014 4.55 3.9C4.45685 3.96986 4.38125 4.06045 4.32918 4.16459C4.27711 4.26873 4.25 4.38357 4.25 4.5V18C4.25 18.1164 4.27711 18.2313 4.32918 18.3354C4.38125 18.4396 4.45685 18.5301 4.55 18.6C4.64315 18.6699 4.75128 18.7171 4.86584 18.7379C4.98039 18.7587 5.09822 18.7526 5.21 18.72L21.71 13.6575Z" stroke="#DF1B12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.5 14.6419V18C18.5 18.1989 18.421 18.3897 18.2803 18.5303C18.1397 18.671 17.9489 18.75 17.75 18.75H14.75C14.5511 18.75 14.3603 18.671 14.2197 18.5303C14.079 18.3897 14 18.1989 14 18V6.47717" stroke="#DF1B12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_2801_5689">
    <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
    </clipPath>
    </defs>aboutOSMContentaboutOSMContentaboutOSMContent
    </svg>
    </span>
    Join State of the Map 2025. Celebrate mapping, tech, and community with OSM lovers worldwide. 👉
    <a href="https://2025.stateofthemap.org/tickets/" target="_blank" rel="noopener noreferrer" class="underline font-bold">Register Now.</a> for early bird pricing! <span class="inline-block align-middle mx-2"> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="3" r="3" fill="#E4423A"/>
    </svg>
    </span>  Connect with global mappers <span class="inline-block align-middle mx-2"> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="3" r="3" fill="#E4423A"/>
    </svg>
    </span>  Learn cutting-edge techniques <span class="inline-block align-middle mx-2"> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="3" r="3" fill="#E4423A"/>
    </svg>
    </span> 
    Experience the future of open mapping <span class="inline-block align-middle mx-2"> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="3" r="3" fill="#E4423A"/>
    </svg>
    </span> Don't miss out on the biggest OSM event of the year!
    <a href="https://2025.stateofthemap.org/tickets/" target="_blank" rel="noopener noreferrer" class="underline font-bold">Register Now.</a>
    `,
  ],
  EXPLORE_OSM: {
    title: "Explore OSM",
    children: [
      {
        title: "OpenStreetMap (OSM)",
        href: "https://openstreetmap.org",
        isHref: true,
      },
      {
        title: "OSM Wiki",
        href: "https://wiki.openstreetmap.org/",
        isHref: true,
      },
      {
        title: "OSM Wiki Tags",
        href: "https://taginfo.openstreetmap.org/",
        isHref: true,
      },
    ],
  },
  LANGUAGES: [
    {
      language: "English",
      supported: true,
    },
  ],
  TAGLINE: `Making OpenStreetMap (OSM) accessible to everyone. \n  Built with ❤️ for the mapping community.`,
  COPYRIGHT: `© ${new Date().getFullYear()} useOSM. Built for the OpenStreetMap community • Data © OpenStreetMap contributors.`,
  BUY_US_A_COFFEE: {
    text: "Buy us a coffee",
    link: "https://buymeacoffee.com/useosm",
  },
  SOCIALS: {
    GitHub: "https://github.com/unpatterned-labs/useosm",
  },
};
