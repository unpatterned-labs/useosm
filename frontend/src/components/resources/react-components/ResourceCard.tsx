import { Plus } from "@/assets/icons/react/Plus";
import Thumbnail from "@/assets/images/thumbnail.jpg";
import cn from "@/utils/cn";

const ResourceCard = ({
  title = "Resource Title",
  href,
  image = Thumbnail.src,
  ref,
  className,
  imageClassName,
}: {
  title?: string;
  href: string;
  image?: string;
  ref?: React.Ref<HTMLAnchorElement>;
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <a
      ref={ref}
      href={`/resources/${href}`}
      className={cn(
        "group border-grey-50 shadow-card flex h-[16rem] w-full cursor-pointer flex-col justify-between rounded-3xl border p-4 transition-shadow duration-200 hover:shadow-xs md:p-6",
        className,
      )}
    >
      <div className="mb-3 flex flex-1 items-center justify-center overflow-hidden rounded-md">
        <img
          src={image}
          alt="Resource Thumbnail"
          className={cn(
            "w-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-120",
            imageClassName ? imageClassName : "h-19",
          )}
        />
      </div>
      <div className="flex items-center gap-2">
        <h3
          className="text-grey-300 flex-auto truncate text-sm font-medium text-ellipsis md:text-base"
          title={title}
        >
          {title}
        </h3>
        <div className="bg-surface-30 text-grey-75 flex size-6 items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-green-300 group-hover:text-green-50 md:size-8">
          <Plus className="size-3.5 md:size-4" />
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;
