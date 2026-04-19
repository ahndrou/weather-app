import styled from "styled-components";
import { textPreset6, textPreset7 } from "./GlobalStyles";
import type { Forecast } from "./WeatherIcon";
import WeatherIcon from "./WeatherIcon";

type DailyForecastProps = {
  day: string;
  forecast: Forecast;
  high: number;
  low: number;
};

export default function DailyForecast({
  day,
  forecast,
  high,
  low,
}: DailyForecastProps) {
  return (
    <Wrapper>
      <Day>{day}</Day>
      <WeatherIcon forecast={forecast} />
      <TempGroup>
        <TempHigh>{high}</TempHigh>
        <TempLow>{low}</TempLow>
      </TempGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: var(--clr-neutral-800);
  border-radius: 12px;
  padding: 16px 10px;
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
