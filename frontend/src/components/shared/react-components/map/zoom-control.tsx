import { useMap } from "@vis.gl/react-maplibre";

import { Plus } from "@/assets/icons/react/Plus";
import Minus from "@/assets/icons/react/Minus";
import { Button } from "@/components/ui/react/button";

const ZoomControl = () => {
  const { current: map } = useMap();

  // Handle Map zoom in and zoom out
  const handleZoomControl = (type: "in" | "out") => {
    if (!map) return;
    if (type === "in") {
      map.zoomIn();
    } else {
      map.zoomOut();
    }
  };

  return (
    <div className="absolute right-5 bottom-5 flex items-center shadow-xs">
      <Button
        id="zoom-out"
        title="zoom-out"
        variant="outline"
        className="hover:bg-grey-500 hover:text-surface-10 rounded-l-lg rounded-r-none bg-white p-2 transition-all delay-150 ease-in-out"
        onClick={() => handleZoomControl("out")}
      >
        <Minus />
      </Button>
      <Button
        id="zoom-in"
        title="zoom-in"
        variant="outline"
        className="hover:bg-grey-500 hover:text-surface-10 rounded-l-none rounded-r-lg bg-white p-2 transition-all delay-150 ease-in-out"
        onClick={() => handleZoomControl("in")}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default ZoomControl;
