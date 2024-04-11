import { Location } from "./Location";

export interface LocationRepository {
  getLocation: (ip: string) => Promise<Location>;
  setLocation: (ip: string, location: Location) => Promise<void>;
}
