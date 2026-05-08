import { useQuery } from "@tanstack/react-query";
import type { LocationResponse } from "./useLocationQuery";

/**
 * Response from the weather API.
 */
interface WeatherResponse {}

const API = "https://api.open-meteo.com/v1/forecast";

/**
 * Query the Open Meteo weather API based on a chosen location.
 */
export default function useWeatherQuery(
  chosenLocation: LocationResponse | null,
) {
  const latitude = chosenLocation?.latitude;
  const longitude = chosenLocation?.longitude;

  return useQuery({
    queryKey: ["weather", { latitude, longitude }],
    queryFn: () => {
      // The 'enabled' option guarantees that latitude & longitude won't be undefined
      // by the time the query function is executed.
      return fetchWeather(latitude as number, longitude as number);
    },
    enabled: !!chosenLocation,
  });
}

const fetchWeather = (
  latitude: number,
  longitude: number,
): Promise<WeatherResponse> => {
  return fetch(
    `${API}?&latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Response failed: ${response.status}`);
      } else {
        return response;
      }
    })
    .then((data) => data.json());
};
