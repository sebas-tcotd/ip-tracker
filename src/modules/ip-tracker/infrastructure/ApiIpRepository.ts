import { KeyInformation, KeyInformationRepository, Location } from "../domain";
import { ApiResponse } from "./ApiResponse";

export const createApiIpRepository = (): KeyInformationRepository => ({
  get: getIpInformation,
});

async function getIpInformation(
  identifier: string
): Promise<[KeyInformation, Location]> {
  const ipRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
  const baseUrl = "https://geo.ipify.org/api/v2";
  const apiKey = import.meta.env.VITE_IP_GEOLOCALIZATION_API_KEY;
  const searchParam = ipRegex.test(identifier)
    ? `ipAddress=${identifier}`
    : `domain=${identifier}`;

  const apiResponse = await fetch(
    `${baseUrl}/country,city?apiKey=${apiKey}&${searchParam}`
  ).then((response) => response.json() as Promise<ApiResponse>);

  return Promise.resolve([
    {
      ipAddress: apiResponse.ip,
      isp: apiResponse.isp,
      location: apiResponse.location.city,
      timezone: apiResponse.location.timezone,
    },
    { latitude: apiResponse.location.lat, longitude: apiResponse.location.lng },
  ] as const);
}
