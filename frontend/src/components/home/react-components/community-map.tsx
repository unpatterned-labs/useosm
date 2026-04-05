/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef, useState } from "react";
import { type ViewState, Source, Layer } from "@vis.gl/react-maplibre";
import { APP_CONTENT } from "@/config/Content";
import MapContainer from "@/components/shared/react-components/map/map-container";
import ZoomControl from "@/components/shared/react-components/map/zoom-control";
import GeoLocate from "@/components/shared/react-components/map/geo-locate";
import ExpandControl from "@/components/shared/react-components/map/expand-control";
import generateCommunityMapInfo from "@/helper/generateCommunityMapInfo";
import CommunityInfo from "./community-info";
import cn from "@/utils/cn";

const CommunityMap = () => {
  const container = useRef<HTMLDivElement>(null);
  const [viewState, setViewState] = useState<Partial<ViewState>>({
    latitude: 0,
    longitude: 0,
    zoom: 2.5,
  });
  const [communityInfo, setCommunityInfo] = useState<{
    longitude: number;
    latitude: number;
    resolvedKeys: { name: string; url: string }[];
  } | null>(null);

  const handleMapClick = useCallback((event: any) => {
    const features = event?.features;
    if (!features || features.length === 0) {
      setCommunityInfo(null);
      return;
    }
    const information = generateCommunityMapInfo(features);
    if (!information) {
      setCommunityInfo(null);
      return;
    }
    setCommunityInfo({
      longitude: event.lngLat?.lng ?? 0,
      latitude: event.lngLat?.lat ?? 0,
      resolvedKeys: information.resolvedKeys,
    });
  }, []);

  return (
    <div
      ref={container}
      className={cn(
        "bg-surface-30 relative h-[22rem] overflow-clip rounded-4xl shadow-md md:h-[43.75rem]",
        "mx-auto w-full max-w-screen-xl",
      )}
    >
      <MapContainer
        mapStyle={APP_CONTENT.MAP_CONFIG.style}
        viewState={viewState}
        setViewState={setViewState}
        interactiveLayerIds={
          APP_CONTENT.HOME_PAGE.OSMCommunities.map.interactiveLayerIds
        }
        handleMapClick={handleMapClick}
      >
        {/* OSM Communities Layer */}
        <Source {...APP_CONTENT.HOME_PAGE.OSMCommunities.map.source}>
          <Layer {...APP_CONTENT.HOME_PAGE.OSMCommunities.map.layer} />
        </Source>
        <CommunityInfo
          communityInfo={communityInfo}
          setCommunityInfo={setCommunityInfo}
        />
        {/* Map Controls */}
        <ExpandControl containerRef={container} />
        <GeoLocate />
        <ZoomControl />
      </MapContainer>
    </div>
  );
};

export default CommunityMap;
