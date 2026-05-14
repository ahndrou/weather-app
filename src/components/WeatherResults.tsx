import styled from "styled-components";

import WeatherTodayBanner from "./WeatherTodayBanner";
import WeatherTodayDetails from "./WeatherTodayDetails";
import DailyForecastGroup from "./DailyForecastGroup";
import HourlyForecastGroup from "./HourlyForecastGroup";

import type { LocationResponse } from "../hooks/useLocationQuery";
import type { ParsedWeatherResponse } from "../hooks/useWeatherQuery";

interface LoadingProps {
  isLoading: true;
}

interface ReadyProps {
  isLoading?: false;
  chosenLocation: LocationResponse;
  weatherData: ParsedWeatherResponse;
}

type WeatherResultsProps = LoadingProps | ReadyProps;

export default function WeatherResults(props: WeatherResultsProps) {
  if (props.isLoading)
    return (
      <Wrapper>
        <WeatherTodayBanner loading />
        <WeatherTodayDetails loading />
        <DailyForecastGroup loading />
        <HourlyForecastGroup loading />
      </Wrapper>
    );

  const { chosenLocation, weatherData } = props;

  return (
    <Wrapper>
      <WeatherTodayBanner
        location={chosenLocation}
        forecast={weatherData.current}
      />
      <WeatherTodayDetails forecast={weatherData.current} />
      <DailyForecastGroup forecast={weatherData.daily} />
      <HourlyForecastGroup forecast={weatherData.hourlyGroupedByDay} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-rows: ${286 / 16}rem auto 1fr;
  align-items: stretch;

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
