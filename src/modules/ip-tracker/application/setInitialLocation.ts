import { Location, LocationRepository } from "../domain";

export function setInitialLocation(repository: LocationRepository) {
  return async (location: Location) => repository.setLocation(location);
}
