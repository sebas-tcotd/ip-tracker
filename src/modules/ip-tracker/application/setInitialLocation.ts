import { Location, LocationRepository } from "../domain";

export function setInitialLocation(
  locationRepository: LocationRepository,
  location: Location
) {
  locationRepository.setLocation("initial", location);
}
