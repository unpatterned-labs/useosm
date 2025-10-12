import { ResourceCategory, type ResourceItem } from "src/types/content";
import ResourceFilter from "./ResourceFilter";
import ResourceList from "./ResourceList";
import { useEffect, useState } from "react";

const Resources = ({
  list,
  searchPlaceholder,
}: {
  list: ResourceItem[];
  searchPlaceholder: string;
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    ResourceCategory.ALL,
  );
  const [searchText, setSearchText] = useState<string>("");
  const [filteredList, setFilteredList] = useState<ResourceItem[]>(list);

  // Sync when default props change (hard reload / new URL params)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category") || ResourceCategory.ALL;
    const searchParam = params.get("q") || "";
    filterResources(categoryParam, searchParam);
  }, [list]);

  // Update filtered list when active category changes
  const filterResources = (category: string, searchText: string) => {
    const filtered = list.filter((item) => {
      const matchesCategory =
        category === ResourceCategory.ALL || item.category === category;
      const matchesSearch =
        !searchText ||
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchText.toLowerCase());

      return matchesCategory && matchesSearch;
    });
    setActiveCategory(category);
    setSearchText(searchText);
    setFilteredList(filtered);

    // Update URL parameters
    const url = new URL(window.location.href);
    url.searchParams.set("category", category);
    if (searchText) {
      url.searchParams.set("q", searchText);
    } else {
      url.searchParams.delete("q");
    }
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <main className="space-y-20">
      <ResourceFilter
        list={list}
        activeCategory={activeCategory}
        handleCategorySelect={(category: string) =>
          filterResources(category, "")
        }
        searchText={searchText}
        searchPlaceholder={searchPlaceholder}
        handleSearch={(text: string) =>
          filterResources(ResourceCategory.ALL, text)
        }
      />
      <ResourceList className="mx-auto grid max-w-[1328px]" list={filteredList} />
    </main>
  );
};

export default Resources;
