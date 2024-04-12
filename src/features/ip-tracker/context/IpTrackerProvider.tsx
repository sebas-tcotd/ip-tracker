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
  const [keyInformation, setKeyInformation] = useState<KeyInformation>(
    {} as KeyInformation
  );
  const [location, setLocation] = useState<Location>({} as Location);

  const search = async (identifier: string) => {
    const [information, location] = await searchByInternetIdentifier(
      repository
    )(identifier);
    setKeyInformation(information);
    setLocation(location);
  };

  return (
    <IpTrackerContext.Provider
      value={{
        keyInformation,
        location,
        searchByInternetIdentifier: search,
      }}
    >
      {children}
    </IpTrackerContext.Provider>
  );
};
