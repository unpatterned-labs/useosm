import CategoryFilter from "@/components/shared/react-components/CategoryFilter";
import Search from "@/components/shared/react-components/search";
import { useMemo } from "react";
import { ResourceCategory, type ResourceItem } from "src/types/content";

const ResourceFilter = ({
  list,
  activeCategory,
  handleCategorySelect,
  handleSearch,
  searchPlaceholder = "Search resources...",
  searchText,
}: {
  list: ResourceItem[];
  activeCategory: string;
  handleCategorySelect: (category: string) => void;
  handleSearch: (text: string) => void;
  searchPlaceholder: string;
  searchText: string;
}) => {
  // Memoized category statistics
  const CategoryStats = useMemo(() => {
    // Compute category statistics from the list of resources
    const categoryCount: { [key: string]: number } = {};
    list.forEach((item) => {
      if (item.category in categoryCount) {
        categoryCount[item.category] += 1;
      } else {
        categoryCount[item.category] = 1;
      }
    });
    const categories = Object.keys(categoryCount).map((key) => ({
      title: key,
      count: categoryCount[key],
    }));
    // Always include "All" category at the beginning
    return [{ title: ResourceCategory.ALL, count: list.length }, ...categories];
  }, []);

  return (
    <section className="mx-auto max-w-[1328px] space-y-8 px-4">
      <div className="flex w-full items-center justify-center">
        <Search
          placeholder={searchPlaceholder}
          onChange={(value) => handleSearch(value)}
          value={searchText}
        />
      </div>
      <CategoryFilter
        categories={CategoryStats}
        activeCategory={activeCategory}
        onCategorySelect={(category) => handleCategorySelect(category)}
      />
    </section>
  );
};

export default ResourceFilter;
