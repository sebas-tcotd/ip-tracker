import { useEffect, useRef } from "react";

import mapboxgl from "mapbox-gl";

import { useIpTrackerContext } from "../../context";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXGL_API_KEY;

export const useMap = () => {
  const { location } = useIpTrackerContext();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map>();
  const markerRef = useRef<mapboxgl.Marker>();

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: "mapbox://styles/mapbox/standard",
      zoom: 16,
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl(), "bottom-left");

    return () => mapRef.current!.remove();
  }, []);

  useEffect(() => {
    if (!location.latitude || !location.longitude) return;
    if (markerRef.current) markerRef.current.remove();

    mapRef.current?.setCenter([location.longitude, location.latitude]);

    markerRef.current = new mapboxgl.Marker(createCustomMarker())
      .setLngLat([location.longitude, location.latitude])
      .addTo(mapRef.current!);
  }, [location]);

  return mapContainerRef;
};

const createCustomMarker = () => {
  const divElement = document.createElement("img");
  divElement.setAttribute("src", "/img/icon-location.svg");
  return divElement;
};
