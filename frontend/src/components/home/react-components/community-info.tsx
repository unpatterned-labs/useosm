import { XIcon } from "@/assets/icons/react/XIcon";
import { Button } from "@/components/ui/react/button";
import { APP_CONTENT } from "@/config/Content";
import cn from "@/utils/cn";
import type { Dispatch } from "react";

const CommunityInfo = ({
  communityInfo,
  setCommunityInfo,
}: {
  communityInfo: {
    longitude: number;
    latitude: number;
    resolvedKeys: { name: string; url: string }[];
  } | null;
  setCommunityInfo: Dispatch<React.SetStateAction<{
    longitude: number;
    latitude: number;
    resolvedKeys: { name: string; url: string }[];
  } | null>>;
}) => {
  // Clear Community Info
  const handleClearInfo = () => {
    setCommunityInfo(null);
  };

  return (
    <div
      className={cn(
        "bg-surface-10 absolute top-20 right-5 transform space-y-2 rounded-lg py-4 shadow-xs transition-all duration-300 ease-in-out md:space-y-4",
        communityInfo
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none translate-x-4 opacity-0",
      )}
    >
      <div className="flex items-center justify-between">
        <h4 className="mx-2 text-lg font-bold md:mx-3 md:text-xl">
          {APP_CONTENT.HOME_PAGE.OSMCommunities.map.title}
        </h4>
        <Button
          title="close"
          id="close-pop-up"
          variant="outline"
          className="hover:text-red-300"
          onClick={handleClearInfo}
        >
          <XIcon className="size-4 stroke-2 md:size-5" />
        </Button>
      </div>
      <ul className="mx-2 h-[7.5rem] w-[12rem] list-disc space-y-2 overflow-auto pl-2 md:mx-3 md:h-[18rem] md:w-[26rem] md:space-y-4 md:pl-4">
        {communityInfo &&
          communityInfo.resolvedKeys.map((info, index) => (
            <li
              key={index}
              className="ml-4 text-sm font-medium underline md:text-xl"
            >
              <a href={info.url} target="_blank" rel="noreferrer">
                {info.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CommunityInfo;
