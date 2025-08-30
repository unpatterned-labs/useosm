import { Plus } from "@/assets/icons/Plus";
import Thumbnail from "@/assets/images/thumbnail.jpg";

const ResourceCard = ({ href }: { href: string }) => {
  return (
    <a
      href={href}
      className="group border-grey-50 shadow-card block h-auto w-full cursor-pointer rounded-3xl border p-4 transition-shadow duration-200 hover:shadow-xs md:p-6"
    >
      <div className="mb-3 overflow-hidden rounded-md">
        <img
          src={Thumbnail.src}
          alt="Resource Thumbnail"
          className="h-32 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-120"
        />
      </div>
      <div className="flex items-center gap-2">
        <h3
          className="text-grey-300 flex-auto truncate text-base font-medium text-ellipsis"
          title="Resource Title"
        >
          Resource Title
        </h3>
        <div className="bg-surface-30 flex size-8 items-center justify-center rounded-full">
          <Plus className="text-grey-75" />
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;
