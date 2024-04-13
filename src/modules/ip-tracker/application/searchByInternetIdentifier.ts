import {
  KeyInformation,
  KeyInformationRepository,
  Location,
  ensureIdentifierIsValid,
} from "../domain";

export function searchByInternetIdentifier(
  repository: KeyInformationRepository
) {
  return async function (
    identifier: string
  ): Promise<[KeyInformation, Location]> {
    ensureIdentifierIsValid(identifier);
    return await repository.get(identifier);
  };
}
