import { ResourceCategory, type ResourceItem } from "src/types/content";
import { APP_CONTENT } from "@/config/Content";
import ResourceList from "@/components/resources/react-components/ResourceList";
import { useEffect, useState } from "react";
import cn from "@/utils/cn";

const OSMResources = ({
  disablePagination = false,
}: {
  disablePagination?: boolean;
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(
    ResourceCategory.EDITORS,
  );
  const [resourcesList, setResourcesList] = useState<ResourceItem[]>(
    APP_CONTENT.RESOURCES_PAGE.resourcesList,
  );

  const ResourcesCategory = [
    {
      id: 1,
      category: ResourceCategory.EDITORS,
      description: "Editors are too used to contribute to osm data",
    },
    {
      id: 2,
      category: ResourceCategory.DATA_EXTRACTION_AND_ANALYSIS,
      description:
        "Utilities and libraries to query, extract, and analyze raw OpenStreetMap data at scale.",
    },
    // {
    //   id: 3,
    //   category: ResourceCategory.MAP_VISUALIZATION_STACK,
    //   description:
    //     "Utilities and libraries to query, extract, and analyze raw OpenStreetMap data at scale.",
    // },
    {
      id: 4,
      category: ResourceCategory.LIBRARIES,
      description:
        "Code libraries in various programming languages to read, write, and manipulate OSM data.",
    },
    {
      id: 5,
      category: ResourceCategory.NAVIGATION,
      description:
        "Routing engines, on-device libraries, and mobile apps that turn OSM data into turn-by-turn navigation.",
    },
  ];

  const handleCategorySelect = (
    category: string,
    autoAdvance: boolean = false,
  ) => {
    let nextCategory = category;

    if (autoAdvance) {
      const currentIndex = ResourcesCategory.findIndex(
        (cat) => cat.category === category,
      );
      const nextIndex =
        currentIndex === ResourcesCategory.length - 1 ? 0 : currentIndex + 1;
      nextCategory = ResourcesCategory[nextIndex].category;
    }

    // set the active category
    setActiveCategory(nextCategory);

    // filter resource list based on the selected category
    const filtered = APP_CONTENT.RESOURCES_PAGE.resourcesList.filter((item) => {
      return (
        nextCategory === ResourceCategory.EDITORS ||
        item.category === nextCategory
      );
    });

    setResourcesList(filtered);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleCategorySelect(activeCategory, true);
    }, 4500);

    return () => clearInterval(interval);
  }, [activeCategory, isPaused]);

  return (
    <div className="flex md:gap-10">
      <ul className="flex flex-col gap-8 lg:max-w-[22.56rem]">
        {ResourcesCategory.map((category) => (
          <li
            key={category.id}
            className={cn(
              "",
              activeCategory === category.category
                ? "opacity-100"
                : "cursor-pointer opacity-50 hover:opacity-100",
            )}
            onClick={() => handleCategorySelect(category.category)}
          >
            <button className="flex cursor-pointer gap-3 text-start">
              <div
                className={cn(
                  "min-h-full rounded bg-red-50",
                  activeCategory === category.category
                    ? "border-red-50 opacity-100"
                    : "opacity-0",
                )}
              >
                <div
                  className={cn(
                    "rounded border-3",
                    isPaused
                      ? "[transition:height_0ms_linear,border-color_200ms_ease]"
                      : "[transition:height_4500ms_linear,border-color_200ms_ease]",
                    activeCategory === category.category
                      ? "h-full border-red-300"
                      : "h-0 border-transparent",
                  )}
                />
              </div>
              <div className="space-y-2">
                <h4
                  className={cn(
                    "text-grey-300 text-base md:text-2xl",
                    activeCategory === category.category
                      ? "font-medium"
                      : "font-normal",
                  )}
                >
                  {category.category}
                </h4>
                <p className="text-grey-200 text-sm font-light md:text-base">
                  {category.description}
                </p>
              </div>
            </button>
            {activeCategory === category.category && (
              <ResourceList
                className="mt-6 grid grid-cols-1 px-0 md:grid-cols-2 md:gap-6 lg:hidden"
                list={resourcesList}
                emptyText="No resources found in this category."
                disablePagination={disablePagination}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            )}
          </li>
        ))}
      </ul>
      <ResourceList
        className="hidden h-fit flex-1 gap-4 px-0 md:gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        list={resourcesList}
        emptyText="No resources found in this category."
        disablePagination={disablePagination}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      />
    </div>
  );
};

export default OSMResources;
