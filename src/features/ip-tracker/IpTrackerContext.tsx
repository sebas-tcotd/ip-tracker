
import { searchByInternetIdentifier } from "@/modules/ip-tracker/application";
import {
  KeyInformation,
  KeyInformationRepository,
  Location,
} from "@/modules/ip-tracker/domain";
import { PropsWithChildren, createContext, useState } from "react";

export interface IpTrackerContextType {
  keyInformation: KeyInformation;
  location: Location;
  searchByInternetIdentifier: (identifier: string) => void;
  setLocation: (location: Location) => void;
}

export const IpTrackerContext = createContext<IpTrackerContextType>(
  {} as IpTrackerContextType
);

export const IpTrackerProvider = ({
  children,
  repository,
}: PropsWithChildren<{ repository: KeyInformationRepository }>) => {
  const [keyInformation, setKeyInformation] = useState<KeyInformation>(
    {} as KeyInformation
  );
  const [location, setLocation] = useState<Location>({} as Location);

  const search = async (identifier: string) => {
    const information = await searchByInternetIdentifier(repository)(
      identifier
    );
    setKeyInformation(information);
  };

  const handleLocation = (location: Location) => {
    setLocation(location);
  };

  return (
    <IpTrackerContext.Provider
      value={{
        keyInformation,
        location,
        searchByInternetIdentifier: search,
        setLocation: handleLocation,
      }}
    >
      {children}
    </IpTrackerContext.Provider>
  );
};
