import { useQuery } from "@tanstack/react-query";

export interface LocationResponse {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

const API = "https://geocoding-api.open-meteo.com/v1/search";

export function useLocationQuery(locationQuery: string) {
  return useQuery({
    queryKey: ["location", locationQuery],
    queryFn: () => fetchLocationData(locationQuery),
    // Location data isn't likely to change, so let's make it static here. No need
    // to make any future requests to update it.
    staleTime: "static",
  });
}

const fetchLocationData = (location: string): Promise<LocationResponse[]> => {
  return fetch(`${API}?name=${location}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Response failed: ${response.status}`);
      } else {
        return response;
      }
    })
    .then((data) => data.json())
    .then((json) => json.results);
};
