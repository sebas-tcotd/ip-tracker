import "mapbox-gl/dist/mapbox-gl.css";

import { useMap } from "./hooks";

export const Map = () => {
  const mapContainerRef = useMap();

  return (
    <div className="flex items-center justify-center flex-grow-[67] sm:flex-grow-[264] md:flex-grow-[26]">
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
};
