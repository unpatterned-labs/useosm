import BgCardVector from "@/assets/background/resource-card-vector.svg";
import ArrowUpRight from "@/assets/icons/react/ArrowUpRight";
import { Button } from "@/components/ui/react/button";
import cn from "@/utils/cn";

const ResourceCard = ({
  title = "Resource Title",
  href,
  image,
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
        "group border-surface-30 shadow-card flex h-51.5 min-w-65.5 cursor-pointer flex-col justify-between rounded-3xl border bg-white p-1.5 transition-shadow duration-200 hover:shadow-xs",
        className,
      )}
    >
      <div className="bg-surface-30 relative flex min-h-33 w-full flex-col items-start justify-end overflow-hidden rounded-2xl p-3">
        <img
          src={BgCardVector.src}
          alt={"Background Vector"}
          className="absolute right-0 bottom-0 z-0 bg-cover"
        />
        <div className="z-20 flex w-full items-center justify-between">
          <div className="bg-surface-10 shadow-card flex size-18.5 items-center justify-center overflow-clip rounded-2xl p-3">
            <img
              src={image}
              alt="Resource Thumbnail"
              className={cn(
                "size-12.5 h-full w-full object-contain",
                imageClassName ? imageClassName : "",
              )}
            />
          </div>
          <div className="flex h-full items-end justify-end gap-2 group-hover:flex lg:hidden">
            <Button
              id={`${title}-visit-site`}
              className="h-6 rounded-full px-3 text-sm text-[0.5rem] font-normal md:h-10 md:px-4"
            >
              Visit Site
            </Button>
            <div className="bg-grey-400 hover:bg-grey-300 hover:text-surface-10 flex size-6 items-center justify-center rounded-full text-white transition-colors duration-200 md:size-10">
              <ArrowUpRight className="size-3.5 md:size-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center space-y-1 p-1.5">
        <h3
          className="text-grey-300 w-full flex-auto truncate text-sm font-medium text-nowrap text-ellipsis md:text-base"
          title={title}
        >
          {title}
        </h3>
      </div>
    </a>
  );
};

export default ResourceCard;
