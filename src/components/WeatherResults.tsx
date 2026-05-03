import styled from "styled-components";

import WeatherInfoBanner from "./WeatherTodayBanner";
import WeatherTodayDetails from "./WeatherTodayDetails";
import DailyForecastGroup from "./DailyForecastGroup";
import HourlyForecastGroup from "./HourlyForecastGroup";

import { LoadingContext } from "../contexts/LoadingContext";

export default function WeatherResults() {
  return (
    <LoadingContext value={true}>
      <Wrapper>
        <WeatherInfoBanner />
        <WeatherTodayDetails />
        <DailyForecastGroup />
        <HourlyForecastGroup />
      </Wrapper>
    </LoadingContext>
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
