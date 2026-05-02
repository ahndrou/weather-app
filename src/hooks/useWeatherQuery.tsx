import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

/**
 * Query the Open Meteo weather API based on loc
 */
export default function useWeatherQuery() {
  const location = useContext(LocationContext);

  const locationIsLoaded = !!location?.latitude;

  const weatherResult = useQuery({
    queryKey: ["weather", location],
    queryFn: ({ queryKey }) =>
      fetch(
        `https://api.open-meteo.com/v1/forecast?&latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m`,
      ).then((response) => response.json()),
    enabled: locationIsLoaded,
  });
}

const fetchResults = ({ queryKey: queryKeyArray }) => {
  const [, searchQuery] = queryKeyArray;

  return fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}`,
  )
    .then((data) => data.json())
    .then((json) => json.results);
};
