import ArrowUpRight from "@/assets/icons/react/ArrowUpRight";
import { Button } from "@/components/ui/react/button";
import DefaultIcon from "@/assets/images/default-icon.svg";
import cn from "@/utils/cn";
import { APP_CONTENT } from "@/config/Content";

const ResourceCard = ({
  id,
  title = "Resource Title",
  href,
  image,
  ref,
  className,
  imageClassName,
}: {
  id: number;
  title?: string;
  href: string;
  image?: string;
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group border-surface-30 shadow-card flex h-51.5 min-w-65.5 flex-col justify-between rounded-3xl border bg-white p-1.5 transition-shadow duration-200 hover:shadow-xs",
        className,
      )}
    >
      <div className="bg-surface-30 relative flex h-33 w-full flex-col items-start justify-end overflow-hidden rounded-2xl bg-[url('../assets/background/resource-card-vector.svg')] p-3">
        <div className="z-20 flex w-full items-center justify-between">
          <div className="bg-surface-10 shadow-card flex size-18.5 items-center justify-center overflow-clip rounded-2xl p-3">
            <img
              src={image?.endsWith(".ico") ? DefaultIcon.src : image}
              alt="Resource Thumbnail"
              className={cn(
                "size-12.5 h-full w-full object-contain",
                imageClassName ? imageClassName : "",
              )}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = DefaultIcon.src;
              }}
            />
          </div>
          <div className="flex h-full items-end justify-end">
            <div className="flex items-center gap-2 group-hover:flex lg:hidden">
              <Button
                size="sm"
                id={`${title}-visit-site`}
                variant="navlink"
                className="text-grey-300 bg-white font-normal hover:bg-green-300 hover:text-white"
                href={href}
                target="_blank"
              >
                Visit Site
              </Button>
              <a
                href={`${APP_CONTENT.RESOURCES_PAGE.osm_app_catalog_url}${id}`}
                target="_blank"
                className="text-grey-300 flex size-7 items-center justify-center rounded-full bg-white transition-colors duration-200 hover:bg-green-300 hover:text-white md:size-8"
              >
                <ArrowUpRight className="size-4" />
              </a>
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
    </div>
  );
};

export default ResourceCard;
