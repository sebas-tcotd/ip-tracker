type IpAddressValue = string;
export interface KeyInformation {
  ipAddress: IpAddressValue;
  location: string;
  timezone: string;
  isp: string;
}

export const ensureIdentifierIsValid = (identifier: string): void => {
  if (hasHttpPrefix(identifier)) throw new Error("Invalid identifier");
};

function hasHttpPrefix(identifier: string): boolean {
  return identifier.startsWith("http://") || identifier.startsWith("https://");
}
