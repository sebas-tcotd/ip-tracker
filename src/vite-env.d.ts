/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IP_GEOLOCALIZATION_API_KEY: string;
  readonly VITE_MAPBOXGL_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
