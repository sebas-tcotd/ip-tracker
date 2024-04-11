import { KeyInformation, KeyInformationRepository } from "../domain";

export function searchByInternetIdentifier(
  repository: KeyInformationRepository
) {
  return async (identifier: string): Promise<KeyInformation> =>
    repository.get(identifier);
}
