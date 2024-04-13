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
  const [error, setError] = useState<boolean>(false);
  const [keyInformation, setKeyInformation] = useState<KeyInformation>(
    {} as KeyInformation
  );
  const [location, setLocation] = useState<Location>({} as Location);

  const search = async (identifier: string) => {
    try {
      const [information, location] = await searchByInternetIdentifier(
        repository
      )(identifier);
      setError(false)
      setKeyInformation(information);
      setLocation(location);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <IpTrackerContext.Provider
      value={{
        keyInformation,
        location,
        searchByInternetIdentifier: search,
        error,
      }}
    >
      {children}
    </IpTrackerContext.Provider>
  );
};
