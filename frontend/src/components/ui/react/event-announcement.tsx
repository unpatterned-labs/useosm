import { ArrowsInSimple } from "@/assets/icons/react/ArrowInSimple";
import { MegaphoneSimple } from "@/assets/icons/react/MegaPhoneSimple";
import cn from "@/utils/cn";
import { useState } from "react";
import { Button } from "./button";
import { ArrowRight } from "@/assets/icons/react/ArrowRight";
import { APP_CONTENT } from "@/config/Content";

const EventAnnouncement = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHide = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <aside className="fixed top-34 right-4 z-50 md:right-6">
      <div
        role="alert"
        className={cn(
          "bg-surface-10 border-surface-30 shadow-alert sticky top-0 z-50 overflow-hidden rounded-3xl border p-2 transition-all duration-300",
          isVisible ? "w-[21rem]" : "w-13",
        )}
      >
        <div
          className={cn(
            "flex w-full cursor-pointer items-center",
            isVisible ? "justify-between" : "justify-center",
          )}
          title={isVisible ? "Minimize" : "Maximize"}
          onClick={handleHide}
        >
          <div
            className={cn(
              "flex items-center space-x-2",
              !isVisible && "animate-pulse justify-center",
            )}
          >
            <MegaphoneSimple className="size-8" />

            <span
              className={cn(
                "text-grey-300 text-lg whitespace-nowrap transition-all duration-300",
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "w-0 -translate-x-2 overflow-hidden opacity-0",
              )}
            >
              Community Event
            </span>
          </div>

          {isVisible && <ArrowsInSimple />}
        </div>

        <div
          className={cn(
            "flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out",
            isVisible ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <span className="text-grey-300 text-base font-semibold">
            {APP_CONTENT.EVENTS.announcement.title}
          </span>

          <div className="bg-surface-30 h-40 space-y-3 rounded-3xl bg-[url('../assets/background/resource-card-vector.svg')] px-4 py-6">
            <p className="text-grey-300 w-3xs text-base">
              {APP_CONTENT.EVENTS.announcement.description}
            </p>
            <Button
              id="cta-event"
              variant="primaryTwo"
              size="lg"
              href={APP_CONTENT.EVENTS.announcement.link}
              target="_blank"
            >
              Read more
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default EventAnnouncement;
