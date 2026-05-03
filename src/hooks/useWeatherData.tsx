import { useContext } from "react";
import useWeatherQuery from "./useWeatherQuery";
import { LocationContext } from "../contexts/LocationContext";

export default function useWeatherData() {
  const location = useContext(LocationContext);

  return useWeatherQuery(location?.latitude, location?.longitude);
}
