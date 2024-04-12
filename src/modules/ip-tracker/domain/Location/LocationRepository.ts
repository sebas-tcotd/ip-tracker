import { Location } from "./Location";

export interface LocationRepository {
  setLocation: (location: Location) => Promise<void>;
}
