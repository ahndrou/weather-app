import { useQuery } from "@tanstack/react-query";

export interface WeatherResponse {}

const API = "https://api.open-meteo.com/v1/forecast";

/**
 * Query the Open Meteo weather API based on loc
 */
export default function useWeatherQuery(
  latitude: number | undefined,
  longitude: number | undefined,
) {
  const enabled = latitude !== undefined && longitude !== undefined;
  return useQuery({
    queryKey: ["weather", { latitude, longitude }],
    queryFn: () => {
      // This condition should never be true given how the enabled option of react
      // query works.
      if (!enabled) {
        throw new Error(
          "Tried to query weather API with undefined coordinates.",
        );
      } else {
        return fetchWeather(latitude, longitude);
      }
    },
    enabled,
  });
}

const fetchWeather = (
  latitude: number,
  longitude: number,
): Promise<WeatherResponse> => {
  return fetch(
    `${API}?&latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`,
  ).then((data) => data.json());
};
