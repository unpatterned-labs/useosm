import { useState, useEffect } from "react";
import ArrowOut from "@/assets/icons/react/ArrowOut";
import { Button } from "@/components/ui/react/button";
import { APP_CONTENT } from "@/config/Content";

const ExpandControl = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleExpand = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => {
        console.error("Failed to enter fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <Button
      id="expand-map"
      variant="outline"
      className="absolute top-5 right-5 flex items-center gap-2 rounded-lg bg-white p-2 px-3 text-gray-700 shadow-xs transition-all delay-150 ease-in-out hover:bg-gray-100 hover:text-black"
      onClick={handleExpand}
    >
      <ArrowOut />
      <span className="text-sm font-medium">
        {isFullscreen
          ? APP_CONTENT.MAP_CONFIG.control.layout.minimizeLabel
          : APP_CONTENT.MAP_CONFIG.control.layout.maximizeLabel}
      </span>
    </Button>
  );
};

export default ExpandControl;
