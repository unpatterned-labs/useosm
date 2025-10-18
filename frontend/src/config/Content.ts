import { ResourceCategory, type AppConfigType } from "src/types/content";
import { APP_ROUTES } from "./Routes";
import {
  generateResourcePath,
  generateUsecasePath,
} from "src/helpers/generatePath";
import OsmStep1 from "@/assets/images/osm_step_1.jpg";
import OsmStep2 from "@/assets/images/osm_step_2.jpg";
import OsmStep3 from "@/assets/images/osm_step_3.jpg";
import HOT from "@/assets/images/hot.svg";

export const APP_CONTENT: AppConfigType = {
  USECASES: {
    route: "",
    title: "Usecases",
    children: [
      {
        title: "Disaster Response & Humanitarian Aid",
        description:
          "How HOT, Missing Maps, and NGOs use OSM to respond to emergencies, map vulnerable areas, and plan logistics.",
        route: generateUsecasePath("Disaster Response & Humanitarian Aid"),
        active: true,
      },
      {
        title: "Urban Planning",
        description:
          "City governments and researchers using OSM for planning, zoning, or policy analysis.",
        route: generateUsecasePath("Urban Planning"),
        active: false,
      },
      {
        title: "Education & Research",
        description:
          "How universities and students use OSM in classrooms, thesis work, and citizen science.",
        route: generateUsecasePath("Education & Research"),
        active: false,
      },
      {
        title: "Mobility & Transport",
        description:
          "Ride-sharing, routing, bike networks, accessibility, and how tools like GraphHopper, Valhalla, and OsmAnd power them.",
        route: generateUsecasePath("Mobility & Transport"),
        active: false,
      },
      {
        title: "Environment & Climate",
        description:
          "Deforestation, climate monitoring, biodiversity tracking. Show examples using OSM + satellite imagery.",
        route: generateUsecasePath("Environment & Climate"),
        active: false,
      },
      {
        title: "Navigation & Location Services",
        description:
          "Tech companies building navigation apps or local services using OSM data.",
        route: generateUsecasePath("Navigation & Location Services"),
        active: false,
      },
    ],
  },
  RESOURCES: {
    title: "Resources",
    route: APP_ROUTES.RESOURCES,
    children: [
      {
        title: "Editors",
        route: generateResourcePath(ResourceCategory.EDITORS),
        isHref: true,
      },
      {
        title: "Data Extraction and Analysis",
        route: generateResourcePath(
          ResourceCategory.DATA_EXTRACTION_AND_ANALYSIS,
        ),
        isHref: true,
      },
         {
        title: "Libraries",
        route: generateResourcePath(ResourceCategory.LIBRARIES),
        isHref: true,
      },
      {
        title: "Map Visualization Stack",
        route: generateResourcePath(ResourceCategory.MAP_VISUALIZATION_STACK),
        isHref: false,
      },
      {
        title: "Navigation & Mobile Framework",
        route: generateResourcePath(ResourceCategory.NAVIGATION),
        isHref: true,
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
    OrgsUsingOSM: {
      title: "OSM Data is used by top industries around the world",
      description:
        "OpenStreetMap is utilized by leading sectors across the globe, enhancing navigation, logistics, and urban planning, humanitarian response.",
      Organizations: [
        {
          name: "DHL",
          image: HOT.src,
          link: "https://www.dhl.com",
        },
        {
          name: "ABC News",
          image: HOT.src,
          link: "https://www.abcnews.com",
        },
        {
          name: "HOT",
          image: HOT.src,
          link: "https://www.hotosm.org",
        },
        {
          name: "lyft",
          image: HOT.src,
          link: "https://www.lyft.com",
        },
        {
          name: "DHL",
          image: HOT.src,
          link: "https://www.dhl.com",
        },
        {
          name: "ABC News",
          image: HOT.src,
          link: "https://www.abcnews.com",
        },
        {
          name: "HOT",
          image: HOT.src,
          link: "https://www.hotosm.org",
        },
        {
          name: "lyft",
          image: HOT.src,
          link: "https://www.lyft.com",
        },
        {
          name: "DHL",
          image: HOT.src,
          link: "https://www.dhl.com",
        },
        {
          name: "ABC News",
          image: HOT.src,
          link: "https://www.abcnews.com",
        },
        {
          name: "HOT",
          image: HOT.src,
          link: "https://www.hotosm.org",
        },
        {
          name: "lyft",
          image: HOT.src,
          link: "https://www.lyft.com",
        },
        {
          name: "DHL",
          image: HOT.src,
          link: "https://www.dhl.com",
        },
        {
          name: "ABC News",
          image: HOT.src,
          link: "https://www.abcnews.com",
        },
        {
          name: "HOT",
          image: HOT.src,
          link: "https://www.hotosm.org",
        },
        {
          name: "lyft",
          image: HOT.src,
          link: "https://www.lyft.com",
        },
      ],
    },
    OSMStats: {
      title: "See how OpenStreetMap is making a difference around the world",
    },
    OSMResources: {
      title: "Explore the OpenStreetMap Toolbelt",
      description:
        "From code libraries to mapping apps, editors to analytics engines. See tools that tap into OSM's global data to help you build, map, and explore the world smarter.",
      cta: {
        title: "Explore All Resources",
        link: "/resources",
      },
    },
    HowOSMWorks: {
      tagline: "How OSM Works",
      title: "How to contribute to Openstreemap",
      steps: [
        {
          title: "Explore",
          description:
            "Browse the map and find areas that need updating. Missing roads, new buildings, or incorrect information - every contribution matters.",
          image: OsmStep1.src,
        },
        {
          title: "Start Mapping",
          description:
            "Use tools like the iD Editor or JOSM (a more advanced offline editor) to add roads, outline buildings, map paths, and label locations with the correct names.",
          image: OsmStep2.src,
        },
        {
          title: "Upload Changesets",
          description:
            "After making edits, save and upload your changes with a brief description. This instantly improves the global, open-access map data that anyone can use.",
          image: OsmStep3.src,
        },
      ],
      actions: {
        title: "Ready to start contributing",
        downloadEbook: {
          text: "Download eBook",
          link: "https://learnosm.org/en/beginner/",
        },
        watchVideo: {
          text: "Watch Tutorial Video",
          link: "https://www.youtube.com/watch?v=Zx7pKyYxH2c",
        },
        getStarted: {
          text: "Start Mapping",
          link: "https://www.openstreetmap.org/",
        },
      },
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
    resourcesList: [
      {
        title: "iD Editor",
        category: ResourceCategory.EDITORS,
        slug: "id-editor",
        image:
          "data:image/png;base64,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",
        description:
          "A user-friendly, web-based map editor for OpenStreetMap, designed for beginners and experienced mappers alike.",
        lastUpdated: "2024-01-15",
      },
      {
        title: "JOSM",
        category: ResourceCategory.EDITORS,
        slug: "josm",
        image: "https://josm.openstreetmap.de/logo.png",
        description:
          "Java OpenStreetMap Editor (JOSM) is a powerful desktop application for editing OpenStreetMap data.",
        lastUpdated: "2024-01-15",
      },
      {
        title: "MapWithAI",
        category: ResourceCategory.LIBRARIES,
        slug: "mapwithai",
        image:
          "data:image/png;base64,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",
        description:
          "MapWithAI is a web-based tool that leverages artificial intelligence to assist in the editing and enhancement of OpenStreetMap data.",
        lastUpdated: "2024-01-15",
      },
      {
        title: "OSMAnd",
        category: ResourceCategory.NAVIGATION,
        slug: "osmand",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEX/////jg3/nCv/myn/jAn/jw//ni//mST/kRP/lRz/lyD/iwb/kxf/mCH/miX/oDL/hwD/kQD/kwD/hAD/9Or/+vX/gAD/8OP/9/D/7uD/mRX/lgD/69r/2rr/5tH/3sH/1K7/xZD/wIX/zqP/s3L/ypn/3L7/lCT/xJX/1rH/tWv/p0T/vX7/uXX/qUz/ojv/sGH/qVf/oET/mDH/r2L/s23/pEr/nTn/vIP/qFj/rGT/pFP/sG7/zKe4d4naAAALyUlEQVR4nO2dCVfiPBfHEVqkdCFtacFSlrIoqwo44zIz3/9rvS2gonTJzVqf8/45M1OcQ5Jf7s3NSqxU+KsdDheT8Xq5XT08tGKt7rfL9Xg2GoZtAbnzVdifLR+CILAsq1qt11vvqter1Zplxf+zWkb9UHYxydRZrFcJ2hlXmur1Wgy6Gvc7sgsMUmexrAZWNZ/tC2fVCqqbxQ9x2kHUAtGdUz7MSu+x4bgeWHC6D8rYlOOBbIhsdWYtGrwTZC1oReVslP37HjXeuyV7275snO9qR1bABu8EGVizrmyoM4VLVuY7Y7R6m7I4a/gYEITOc5jTn28PcYtcliG0Hvho1cr4ea33eCOZr73s0fPlqdrbyBwHeONejStfoloQSQMcxb2fCFnWSArfzX0ghC9RcC+hOUacG+BXVXtjwXzhgzgDHmW2hI5XxRrwKJFm7KxEG/CoYCVokLMQ0EWkq9ZbiADcyDHgUcGGO1/7wZQIGAecB85DnEEgy0PfVQu4xtRJr/qhepVQxB88qTfhBzjuFecvQPy6jadANttJwSMfwHtTNtmHzHsOfN7Kks11JmvlMQdslQkwRnxgjFg2QOaIXr1sgIwRvYfyASZtkR1hqYLMp9hF1G15uomvYtUvbsrS0V+KzVQjKsdQLV3OjB6w78imyJUzpAUMnZpsiFzVHMp1Rs8sN2DcZ9TpCEsbRj9lUgXUKKhVYyPWask/yUP18+Hj+ezH72/yH2rfPkEpmmgzcGo/QQ7xuoYXMC2IZZpmECv+x7TYJkw6Qn00GRUhBus5vYenzTiaTSbRevP0EL8PmHGaSzLAERMfNQPH3Ea34fdq7oaL8X3gBExq0SE6utHtUWdsmb3ecpHXYYWTR8ehh7QCEj/d0mZs9iys803DTUANSeKnC0of1ewl/oDqdmtTMsJHb15AEwasoBfBVt87a4cuRwtKuKboKawgmMHbhRf1aBih5xlC2yKW1iMcZHhj2yTP1oZtLt4TZ3Vtb8hXiNpPzjVpxuYWktPQIc3HqdNtDQ1qAXHWkJyrhDVpMphzj23SzFv4mYwITRi0WJy0G5gaWfYO/h64SVaLDqst6CeyGr42cTOYEGVwbbPbuZyQeaqDWwIiE5rks7QUDRySYI5rRCITmhbbsy4dkwQR04gkJmzWWe/nda3m90yKy4VnxL5zDVaT9W5eJdkOauJlbp1eyV9YE8WVCQdkbsEDYgsT8Uwmxn7UwIYna/EAjBGr8Mq2i3vkjQYGdHgdU2oHYEStsE/24CbEqDZShQSlKfKnETjO2Dy/wNMHIzqjgiRxA9hninzPtY6hNd4siDVgt2j+5goYh3Zoldv5m1GRAUuOX5R5V9cBRhtjnpueBUyOayM8agF0K7OWlxq0M9Q4HaH7oi2w/8qN7ZFhZuj68Eoe4lq6PryL3zoiviPYtWGOZeStulnNLMJUMZwR5mnmgErVrGYndWPDkqLcYMZWDVjx2RO5CayybOpzEJi6hdV8Tqe/1SAJaTyOsaZrBStYdvyzQd5gi/si0hBkxKaTlc4AlI5AE1YqO5ARM+t+5jTN5knFD8JaYaJDS8T2sMx16a3WxJeWE5M5yCwu0VnZshqiDUkFe22SjSYOpHB2eiIhiNAWe+VBF1a49PnFApKI8SQUsFJ5NCCE6ROCMSiNW8GEfUj9O+lD09+QQJPh6RwFIdTSd0sNAKHxSzBfpfIEcDEtde27DakkW8jXVb9oBCpfWhwcgFIQf1kFzAJpoxpIHWmi5k3nqgFaUaqPRY6GrcZaOF+lsokDRfw6/BW/mh/AKeR22nLULwOfUEIzTJwsoTupmVc8TTPSFvd3+IBawZokH4U2fgGNtO4C4KSaIhwvkQ4oYdoxN8jnASdXGMqks0FXwf+4hP4+0RMgUiiXW1AdgJfbcu41GkOKeNlhDyAfH4nHqySnbABFvIyFQ8jHRS5gfKoPKeLloOaW7uMiBHKzyyKCKkjONXE3dG62AHxckXNJXBsQ7lNm+SBCOddSeuIIdT7nZ4rkAQYlKSPn/xOeS5aXQggvvRQSS39mpAERyrk49YaOEDSm+QE9/mV/SPlxEaI0QghxAbG7Mu8a0TWkDiRQyZk9RZAO7fK0Qlc3DM04SCt6sOXMgH81AIQpHZpu4Cv3YBU3VQEl1FM+71B+nr8gNkg7rPC7ASCU0SGGAMJG2qHQXzZ+AlKWMRaQAqZFijkkARmr+mtIAdNW9UeABBrXwvkqlRqgGaU62QDSkFO6G95qg8qXNq7sQlKQ0BAhPmakdYeVigHxAtDXipnoCdKKjNQkIN2FIXya70FcLLWzqFReIG6giP5FMH0FUDo7/UsgoDRU0W66ZVD/NxA/MHSxKxmgSGroGUvWOqQh2gxuuwMIMh4xGlk7uFsVkoomlBAS6LOb0AxST4YuMtb0QU6a6V/xqKZxeCUmSnn4qsazQMJniAnTRzQH6Q2IdHHrUUNYybIPUmxtSDqqOCM+q5CC2a+ZCU0UUFXpos6Y9oEm/JeZ0g0spYzRH3sZsGLlTXw0YFL5X2ZkpQhY8XmT1wjmpg0hA5sOghVKyVvNDYGJ2TsBhLsrWKFQ7jKZAQpasRH5r+9PgD6qNnOTg7ppbqtmIqiP5jtpHE2h6al7zoR7oFc1UEGdw/rWWPqUK+AU6KPF4xCo18d1lt2/0msC9amGXlQcD5xkA/HbER4SlKZwAWkKjTUNlVu0udGhbaahFDcaaJeYIHL6HlvbBgMWdIZHgWNNo3GlcblFyQB29UlJcIYgfbgRG/Yde8SuAZrLHYWw5qwNFS7bYO2o7cYBUD28Tg+f7zKk4i0e/dMJEK8YnzkN9SuCUugjvNRtgrRVFc9BMNVHRGVoYCY/ITFijMhuthiRAeKakNSIKnplE2+832SA2CaMWyJhDjqTA29DWyHLHgG+b3ZH0swTuS/UgGuXMO8ryDTnltCIsRk1OjMOVbIgoEJD3Y7QUeKaRK/kw9TOH0TqPaoCu1ctJHWVWDp6IYs43SkirtjYhMAOeU3sLAfGCD7Eab8gqjyhEcBTiN3lyDiFHQwbvFHxqVcqEJB4VHHGuBvh5uWNnun4Yh8l2GHYUuapKgi93Ra3SK//hmja30H6Gxyw0iUPa58ZI7Sb53Qf3mC+Q7Tmi3VFdvhlROmnx7wVHbm7l9Hg+/p/e/BvuneRTtfeT0KE+9HUfnpSQhnLeP7z9yXR39edkfxAB/pmZl0Q+WgiT1GuCqXiPyj6u5TDD9X3/y1+yJWCP+L+roGLkb58uRQnliMku/QYQlQne37rsstfKD171x5Hno7RFKVKuaICTIbgshEKBB1wX6pfbkSXwXmQeZkRXSarX9PyBlTEaPPytayIiC6MnulZV8ooneFJkH0ZEXWWRwi8u/Ih6mz3u7qNsiEyBiyfFZkDxoh7JJvqTGjPY9d5Vx5ExOm3aryWBdElndMXaurKZjuIwfZPpia+/Hij+1zPQw6QbESd4xGsg9qSQyra878bR2pjdPmehDxp4cryVN0VdG9qey/HjGgv7huBkYSYqvscO4lLhXeiXRWpoi82mrsig6pgAx7V2bn6uRTIw+E5fqcc/hQ+uHs5d2/1daSLEOJ6lDxfLy5/RuSv5Vzxd1T3r8+XEflvcq6/+9TNG0dG5P+Rc1XqV3FjjPnkBJhLdaauW1xgKJ/7twz2e5c315kGHeSiuZwLNnN0+8dnBYn8neiLRfDUnqs+ooZEvh6Jv8EIW2Fk0FgSIV95kXOxJkA3810MSUCJXH8flSV4FqjbnyowU8Z0+rRfutiSq/btK34P4r72S9z0sjX1MQF9IasvPPSChyhj7sdKWIg/GbBSmRcj+mKunuCmScGoHPFdoxehkZ+cJEWHE6YfDx/vkD+SXUB69X2ULb+c40+ghtmIvpyLwZlrkIXol34IiqsMxP8OYDwad1MA3TJN4anVuUR0f+RINFvtC0LZi4TM1VW+8En6NSdc5d19eqrL4Q6GEsjbvyO6XE40lUEnRJf3zUsStUs6Rl/EFWjS9G+PngVvlf0PSPn4gIIJ7HsAAAAASUVORK5CYII=",
        description:
          "OSMAnd is a map and navigation application for Android and iOS that uses OpenStreetMap data.",
        lastUpdated: "2024-01-15",
      },
      {
        title: "OSMCha",
        category: ResourceCategory.DATA_EXTRACTION_AND_ANALYSIS,
        slug: "osmcha",
        image:
          "data:image/jpeg;base64,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",
        description:
          "OSMCha is a web-based tool for reviewing changes in OpenStreetMap data, helping to ensure data quality and integrity.",
        lastUpdated: "2024-01-15",
      },
    ],
  },
  announcementContent: [
    // State of the Map 2025 Announcement
    `<span class="inline-block ml-2 align-middle">
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2801_5689)">
    <path opacity="0.2" d="M14 6.47723L5.21 3.78098C5.0983 3.7484 4.98055 3.74225 4.86607 3.76303C4.75158 3.78381 4.6435 3.83094 4.55037 3.9007C4.45725 3.97045 4.38163 4.06092 4.32949 4.16494C4.27736 4.26896 4.25015 4.38368 4.25 4.50004V18C4.25015 18.1164 4.27736 18.2311 4.32949 18.3351C4.38163 18.4392 4.45725 18.5296 4.55037 18.5994C4.6435 18.6691 4.75158 18.7163 4.86607 18.737C4.98055 18.7578 5.0983 18.7517 5.21 18.7191L14 16.0229V6.47723Z" fill="#CCDCBF"/>
    <path d="M21.71 13.6575C21.8658 13.6121 22.0026 13.5173 22.1 13.3875C22.1974 13.2577 22.25 13.0998 22.25 12.9375V9.5625C22.25 9.40022 22.1974 9.24232 22.1 9.1125C22.0026 8.98268 21.8658 8.88794 21.71 8.8425L5.21 3.78C5.09822 3.7474 4.98039 3.74127 4.86584 3.7621C4.75128 3.78293 4.64315 3.83014 4.55 3.9C4.45685 3.96986 4.38125 4.06045 4.32918 4.16459C4.27711 4.26873 4.25 4.38357 4.25 4.5V18C4.25 18.1164 4.27711 18.2313 4.32918 18.3354C4.38125 18.4396 4.45685 18.5301 4.55 18.6C4.64315 18.6699 4.75128 18.7171 4.86584 18.7379C4.98039 18.7587 5.09822 18.7526 5.21 18.72L21.71 13.6575Z" stroke="#50683C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.5 14.6419V18C18.5 18.1989 18.421 18.3897 18.2803 18.5303C18.1397 18.671 17.9489 18.75 17.75 18.75H14.75C14.5511 18.75 14.3603 18.671 14.2197 18.5303C14.079 18.3897 14 18.1989 14 18V6.47717" stroke="#50683C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
    <circle cx="3" cy="3" r="3" fill="#50683C"/>
    </svg>
    </span>  Connect with global mappers <span class="inline-block align-middle mx-2"> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="3" r="3" fill="#50683C"/>
    </svg>
    </span>  Learn cutting-edge techniques <span class="inline-block align-middle mx-2"> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="3" r="3" fill="#50683C"/>
    </svg>
    </span> 
    Experience the future of open mapping <span class="inline-block align-middle mx-2"> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="3" r="3" fill="#50683C"/>
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
  COPYRIGHT: `© ${new Date().getFullYear()} UseOSM. Built for the OpenStreetMap community • Data © OpenStreetMap contributors.`,
  BUY_US_A_COFFEE: {
    text: "Buy us a coffee",
    link: "https://buymeacoffee.com/useosm",
  },
  SOCIALS: {
    GitHub: "https://github.com/unpatterned-labs/useosm",
  },
};
