import { ArrowLeft } from "@/assets/icons/react/ArrowLeft";
import { ArrowRight } from "@/assets/icons/react/ArrowRight";
import { Button } from "@/components/ui/react/button";
import cn from "@/utils/cn";
import { useRef, useState, useEffect } from "react";

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
  const scrollRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScrollability();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollability);
    window.addEventListener("resize", checkScrollability);
    return () => {
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [categories]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
  };

  return (
    <section className={cn("mt-6 mb-4 flex w-full items-center gap-1 py-1")}>
      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className={cn(
          "border-grey-50 text-grey-300 hover:bg-grey-50 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border bg-white shadow-xs transition-all duration-200",
          canScrollLeft ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      {/* Scrollable list */}
      <ul
        ref={scrollRef}
        className="flex w-full transform items-center gap-2 overflow-x-auto transition-opacity duration-300 [scrollbar-width:none] md:justify-center [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => (
          <li key={`category-button-${category.title}`} className="shrink-0">
            <Button
              id={`category-button-${category.title}`}
              title={category.title}
              size="lg"
              className={cn(
                "h-10 px-3.5 sm:text-base",
                category.title === activeCategory
                  ? "bg-grey-50 text-grey-300 hover:bg-grey-50 hover:text-grey-300"
                  : "text-grey-100 hover:bg-grey-50 hover:text-grey-300 bg-white",
              )}
              onClick={() => handleCategorySelect(category.title)}
            >
              <span>{category.title}</span>
              <span>{category.count}</span>
            </Button>
          </li>
        ))}
      </ul>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className={cn(
          "border-grey-50 text-grey-300 hover:bg-grey-50 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border bg-white shadow-xs transition-all duration-200",
          canScrollRight ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </section>
  );
};

export default CategoryFilter;
