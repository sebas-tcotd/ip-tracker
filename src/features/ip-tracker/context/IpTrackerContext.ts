import { KeyInformation, Location } from "@/modules/ip-tracker/domain";
import { createContext, useContext } from "react";

export interface IpTrackerContextType {
  keyInformation: KeyInformation;
  location: Location;
  searchByInternetIdentifier: (identifier: string) => Promise<void>;
  error: boolean;
}

export const IpTrackerContext = createContext<IpTrackerContextType>(
  {} as IpTrackerContextType
);

export const useIpTrackerContext = () => useContext(IpTrackerContext);
