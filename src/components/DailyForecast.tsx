import styled from "styled-components";
import { textPreset6, textPreset7 } from "./GlobalStyles";
import type { WeatherCode } from "./WeatherIcon";
import WeatherIcon from "./WeatherIcon";
import type { WeekDayNumber } from "../helpers/helpers";

const truncatedWeekdays = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

interface LoadingProps {
  loading: true;
}

interface ReadyProps {
  loading?: false;
  day: WeekDayNumber | null;
  weatherCode: WeatherCode | null;
  high: number | null;
  low: number | null;
}

type DailyForecastProps = LoadingProps | ReadyProps;

export default function DailyForecast(props: DailyForecastProps) {
  if (props.loading) {
    return <Wrapper></Wrapper>;
  }

  if (!props.loading) {
    const { day, weatherCode, high, low } = props;

    return (
      <Wrapper>
        <Day>{truncatedWeekdays[day!]}</Day>
        <WeatherIcon size="medium" forecast={weatherCode} />
        <TempGroup>
          <TempHigh>{high + "°"}</TempHigh>
          <TempLow>{low + "°"}</TempLow>
        </TempGroup>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  background-color: var(--clr-neutral-800);
  border: 1px solid var(--clr-neutral-600);
  border-radius: 12px;
  padding: 16px 10px;
  min-height: ${165 / 16}rem;
`;

const Day = styled.h3`
  ${textPreset6}
`;

const TempGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TempHigh = styled.span`
  ${textPreset7}
`;

const TempLow = styled.span`
  ${textPreset7}
  color: var(--clr-neutral-200);
`;
