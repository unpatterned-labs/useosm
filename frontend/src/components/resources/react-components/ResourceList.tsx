
import ResourceCard from "./ResourceCard";
import type { ResourceItem } from "src/types/content";

const ResourceList = ({ list }: { list: ResourceItem[] }) => {
  return (
    <div className="mx-auto grid max-w-[1328px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {list.map((item) => (
        <ResourceCard
          key={item.title}
          title={item.title}
          image={item.image}
          href={item.slug}
        />
      ))}
    </div>
  );
};

export default ResourceList;
