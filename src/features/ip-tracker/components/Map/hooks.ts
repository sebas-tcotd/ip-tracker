import { useEffect, useRef } from "react";

import mapboxgl from "mapbox-gl";

import { useIpTrackerContext } from "../../context";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOXGL_API_KEY;
const attributionText =
  'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/sebas-tcotd" target="_blank" title="||S||">Sebastian Vargas</a>';

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
      attributionControl: false,
    });

    mapRef.current?.addControl(
      new mapboxgl.AttributionControl({
        customAttribution: attributionText,
      })
    );
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
  divElement.setAttribute("alt", "Map marker");
  return divElement;
};
