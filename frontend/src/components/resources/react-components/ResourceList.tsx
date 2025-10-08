import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ResourceCard from "./ResourceCard";
import type { ResourceItem } from "src/types/content";

const ResourceList = ({ list }: { list: ResourceItem[] }) => {
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  // Animation on list change
  useEffect(() => {
    if (list.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        },
      );
    }
  }, [list]);

  return (
    <div className="mx-auto grid max-w-[1328px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {list.length > 0 ? (
        list.map((item, index) => (
          <ResourceCard
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            key={item.title}
            title={item.title}
            image={item.image}
            href={item.slug}
          />
        ))
      ) : (
        <div className="col-span-full flex h-[10rem] items-center justify-center">
          <p className="w-xs text-center text-red-100">
            Oops! 😥 We couldn’t find any resources. Try refining your search or
            exploring other categories.
          </p>
        </div>
      )}
    </div>
  );
};

export default ResourceList;
