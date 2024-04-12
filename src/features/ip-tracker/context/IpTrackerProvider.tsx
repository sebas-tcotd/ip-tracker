import { searchByInternetIdentifier } from "@/modules/ip-tracker/application";
import {
  KeyInformation,
  KeyInformationRepository,
  Location,
} from "@/modules/ip-tracker/domain";
import { PropsWithChildren, useState } from "react";
import { IpTrackerContext } from "./IpTrackerContext";

export const IpTrackerProvider = ({
  children,
  repository,
}: PropsWithChildren<{ repository: KeyInformationRepository }>) => {
  const [keyInformation, setKeyInformation] = useState<KeyInformation>({
    ipAddress: "",
    isp: "",
    location: "",
    timezone: "",
  });
  const [location, setLocation] = useState<Location>({} as Location);

  const search = async (identifier: string) => {
    const information = await searchByInternetIdentifier(repository)(
      identifier
    );
    setKeyInformation(information);
  };

  const handleLocation = async (location: Location) => {
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
