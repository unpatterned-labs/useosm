import { Button } from "@/components/ui/react/button";
import cn from "@/utils/cn";

type Props = {
  categories: Array<{
    count: number;
    title: string;
  }>;
  activeCategory?: string;
  onCategorySelect: (category: string) => void;
};

const CategoryFilter = ({
  categories,
  onCategorySelect,
  activeCategory,
}: Props) => {
  // Handle category selection
  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
  };

  return (
    <section
      className={cn(
        "sticky top-90 z-50 mt-6 mb-4 flex w-full items-center py-1",
        categories.length > 5
          ? "overflow-y-none justify-center md:overflow-x-auto"
          : "justify-center",
      )}
    >
      <ul className="flex w-fit transform flex-wrap items-center gap-2 transition-opacity duration-300">
        {categories.map((category) => (
          <li key={`category-button-${category.title}`}>
            <Button
              id={`category-button-${category.title}`}
              title={category.title}
              size="lg"
              className={cn(
                "",
                category.title === activeCategory
                  ? "bg-grey-50 text-grey-300 hover:bg-grey-50 hover:text-grey-300"
                  : "text-grey-100 hover:bg-grey-50 hover:text-grey-300 bg-white",
              )}
              key={category.title}
              onClick={() => handleCategorySelect(category.title)}
            >
              <span>{category.title}</span>
              <span>{category.count}</span>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryFilter;
