import styled from "styled-components";
import { textPreset6, textPreset7 } from "./GlobalStyles";
import type { WeatherCode } from "./WeatherIcon";
import WeatherIcon from "./WeatherIcon";

type DailyForecastProps = {
  day: string | null;
  weatherCode: WeatherCode | null;
  high: number | null;
  low: number | null;
};

export default function DailyForecast({
  day,
  weatherCode,
  high,
  low,
}: DailyForecastProps) {
  return (
    <Wrapper>
      <Day>{day}</Day>
      <WeatherIcon forecast={weatherCode} />
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
  border: 1px solid var(--clr-neutral-600);
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
