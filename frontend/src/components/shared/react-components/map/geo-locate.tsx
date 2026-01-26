import Locate from "@/assets/icons/react/Locate";
import { Button } from "@/components/ui/react/button";
import { useMap } from "@vis.gl/react-maplibre";

const GeoLocate = () => {
  const { current: map } = useMap();
  const handleGeoLocate = () => {
    if (!map) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.flyTo({
            center: [longitude, latitude],
            zoom: 5,
            speed: 1.1,
            curve: 1.4,
            essential: true,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
        },
        { enableHighAccuracy: true },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <Button
      id="geo-locate"
      title="geo-locate"
      variant="outline"
      className="bg-surface-10 hover:bg-grey-500 hover:text-surface-10 absolute right-25 bottom-10 rounded-lg p-2 shadow-xs"
      onClick={handleGeoLocate}
    >
      <Locate />
    </Button>
  );
};

export default GeoLocate;
