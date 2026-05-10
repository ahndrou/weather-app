import styled from "styled-components";
import DailyForecast from "./DailyForecast";
import { textPreset5 } from "./GlobalStyles";
import useWeatherQuery from "../hooks/useWeatherQuery";
import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { range, roundIfDefined } from "../helpers/helpers";

export default function DailyForecastGroup() {
  const chosenLocation = useContext(LocationContext);
  const weatherQuery = useWeatherQuery(chosenLocation);

  const forecastLength = weatherQuery.data?.daily.weather_code?.length;

  const forecasts = range(forecastLength as number).map((i) => {
    return {
      weatherCode: weatherQuery.data?.daily.weather_code?.[i],
      temperatureMax: roundIfDefined(
        weatherQuery.data?.daily.temperature_2m_max?.[i],
      ),
      temperatureLow: roundIfDefined(
        weatherQuery.data?.daily.temperature_2m_min?.[i],
      ),
      day: roundIfDefined(weatherQuery.data?.daily.time[i].getDay()),
    };
  });

  return (
    <div>
      <Heading>Daily forecast</Heading>
      <ForecastGroup>
        {forecasts.map((forecast) => {
          return (
            <DailyForecast
              day={forecast.day!}
              high={forecast.temperatureMax!}
              low={forecast.temperatureLow!}
            />
          );
        })}
      </ForecastGroup>
    </div>
  );
}

const Heading = styled.h2`
  ${textPreset5}

  margin-bottom: ${20 / 16}rem;
`;

const ForecastGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${90 / 16}rem, 1fr));
  gap: 16px;
`;
