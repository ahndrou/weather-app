import { useQuery } from "@tanstack/react-query";
import type { QueryFunctionContext } from "@tanstack/react-query";

const API = "https://geocoding-api.open-meteo.com/v1/search";

export interface LocationResponse {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export function useLocationQuery(location: string) {
  return useQuery({
    queryKey: ["location", location],
    queryFn: fetchResults,
    // Location data isn't likely to change, so let's make it static here. No need
    // to make any future requests to update it.
    staleTime: "static",
  });
}

const fetchResults = ({
  queryKey,
}: QueryFunctionContext): Promise<LocationResponse[]> => {
  const [_, location] = queryKey;

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
