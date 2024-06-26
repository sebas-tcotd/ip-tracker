import { Location } from "../Location";
import { KeyInformation } from "./KeyInformation";

export interface KeyInformationRepository {
  get: (identifier: string) => Promise<[KeyInformation, Location]>;
}
