import { useRef, useState, useCallback } from "react";
import ResourceCard from "./ResourceCard";
import type { ResourceItem } from "src/types/content";
import cn from "@/utils/cn";

const PAGE_SIZE = 9;

const ResourceList = ({
  list,
  className,
  resourceClassName,
  imageClassName,
  emptyText,
  disablePagination = false,
  onMouseEnter,
  onMouseLeave,
}: {
  list: ResourceItem[];
  className?: string;
  resourceClassName?: string;
  imageClassName?: string;
  emptyText?: string;
  disablePagination?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const visibleList = list.slice(0, visibleCount);
  const hasMore = visibleCount < list.length;

  const loadMore = useCallback(() => {
    if (loading || !hasMore || disablePagination) return;

    setLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + PAGE_SIZE);
      setLoading(false);
    }, 1000);
  }, [loading, hasMore, disablePagination]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !disablePagination) {
          loadMore();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [loadMore],
  );

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {visibleList.length > 0 ? (
        visibleList.map((item, index) => (
          <ResourceCard
            ref={lastElementRef}
            id={item.id}
            key={`${item.title}-${index}`}
            title={item.title}
            image={item.image}
            href={item.website}
            className={resourceClassName}
            imageClassName={imageClassName}
          />
        ))
      ) : (
        <div className="col-span-full flex h-[10rem] items-center justify-center">
          <p className="text-center text-red-100">
            {emptyText || "No resources found"}
          </p>
        </div>
      )}

      {loading && (
        <div className="col-span-full flex justify-center py-6">
          <div className="text-grey-300 flex items-center gap-2 text-base font-medium">
            Loading
            <div className="h-6 w-6 animate-spin rounded-full border-[0.157rem] border-green-50 border-r-green-500" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceList;
