import styled from "styled-components";

import WeatherInfoBanner from "./WeatherTodayBanner";
import WeatherTodayDetails from "./WeatherTodayDetails";
import DailyForecastGroup from "./DailyForecastGroup";
import HourlyForecastGroup from "./HourlyForecastGroup";

import type { LocationResponse } from "../hooks/useLocationQuery";
import useWeatherQuery from "../hooks/useWeatherQuery";

interface WeatherResultsProps {
  chosenLocation: LocationResponse | null;
}

export default function WeatherResults({
  chosenLocation,
}: WeatherResultsProps) {
  const weatherQuery = useWeatherQuery(chosenLocation);

  if (weatherQuery.isError) return "Error!!";
  if (weatherQuery.isPending) return "Loading";

  return (
    <Wrapper>
      <WeatherInfoBanner
        location={chosenLocation!}
        forecast={weatherQuery.data.current}
      />
      <WeatherTodayDetails data={weatherQuery.data.current} />
      <DailyForecastGroup data={weatherQuery.data.daily} />
      <HourlyForecastGroup data={weatherQuery.data.hourly} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 32px;

  /* stylelint-disable */
  @media screen and (width >= ${1440 / 16}rem) {
    grid-template-columns: repeat(3, 1fr);
    /* stylelint-enable */

    & > :not(:last-child) {
      grid-column: 1 / -2;
    }

    & > :last-child {
      grid-column: -2;
      grid-row: 1 / span 3;
    }
  }
`;
