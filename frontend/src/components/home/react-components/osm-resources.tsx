import { ResourceCategory, type ResourceItem } from "src/types/content";
import { APP_CONTENT } from "@/config/Content";
import ResourceList from "@/components/resources/react-components/ResourceList";
import { useState } from "react";
import cn from "@/utils/cn";

const OSMResources = () => {
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
    {
      id: 3,
      category: ResourceCategory.MAP_VISUALIZATION_STACK,
      description:
        "Utilities and libraries to query, extract, and analyze raw OpenStreetMap data at scale.",
    },
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

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    const filtered = APP_CONTENT.RESOURCES_PAGE.resourcesList.filter((item) => {
      return (
        category === ResourceCategory.EDITORS || item.category === category
      );
    });
    setResourcesList(filtered);
  };

  return (
    <div className="flex md:gap-10">
      <ul className="flex flex-col gap-8 lg:max-w-[22.56rem]">
        {ResourcesCategory.map((category) => (
          <li
            className={cn(
              "",
              activeCategory === category.category
                ? "opacity-100"
                : "cursor-pointer opacity-50 hover:opacity-100",
            )}
            onClick={() => handleCategorySelect(category.category)}
          >
            <button className="flex gap-4 text-start">
              <hr
                className={cn(
                  "border-grey-200 h-3 rounded border-[3px] border-l",
                  activeCategory === category.category
                    ? "border-green-400 opacity-100"
                    : "opacity-0",
                )}
              />
              <div className="space-y-2">
                <h4 className="text-grey-300 text-base font-medium md:text-2xl">
                  {category.category}
                </h4>
                <p className="text-grey-200 text-sm font-light md:text-base">
                  {category.description}
                </p>
              </div>
            </button>
            {activeCategory === category.category && (
              <ResourceList
                resourceClassName="bg-white w-[163px] h-[148px]"
                className="mt-6 flex flex-1 flex-wrap gap-4 px-0 md:gap-6 lg:hidden"
                imageClassName="h-18"
                list={resourcesList}
                emptyText="No resources found in this category."
              />
            )}
          </li>
        ))}
      </ul>
      <div>
        <ResourceList
          resourceClassName="bg-white w-[262px] h-[234px]"
          className="hidden flex-1 flex-wrap gap-6 lg:flex"
          list={resourcesList}
          emptyText="No resources found in this category."
        />
      </div>
    </div>
  );
};

export default OSMResources;
