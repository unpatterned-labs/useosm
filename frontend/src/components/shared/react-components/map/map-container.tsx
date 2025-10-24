import { type Dispatch } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import { Map, type MapLayerMouseEvent, type ViewState } from "@vis.gl/react-maplibre";

const MapContainer = ({
  mapStyle,
  className,
  viewState,
  setViewState,
  children,
  handleMapClick,
  interactiveLayerIds
}: {
  mapStyle?: string;
  className?: string;
  viewState: Partial<ViewState>;
  setViewState: Dispatch<ViewState>;
  children: React.ReactNode;
  handleMapClick: (e: MapLayerMouseEvent) => void
  interactiveLayerIds: string[] | undefined
}) => {
  return (
    <Map
      initialViewState={viewState}
      mapStyle={mapStyle}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{
        height: "100%",
        width: "100%",
      }}
      attributionControl={false}
      onClick={handleMapClick}
      interactiveLayerIds={interactiveLayerIds}
    >
      {children}
    </Map>
  );
};

export default MapContainer;
