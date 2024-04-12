import { KeyInformation, KeyInformationRepository, Location } from "../domain";

export function searchByInternetIdentifier(
  repository: KeyInformationRepository
) {
  return async (identifier: string): Promise<[KeyInformation, Location]> =>
    repository.get(identifier);
}
