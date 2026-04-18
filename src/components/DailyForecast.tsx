import styled from "styled-components";
import drizzleIconSrc from "../assets/images/icon-drizzle.webp";
import fogIconSrc from "../assets/images/icon-fog.webp";
import overcastIconSrc from "../assets/images/icon-overcast.webp";
import partlyCloudyIconSrc from "../assets/images/icon-partly-cloudy.webp";
import rainIconSrc from "../assets/images/icon-rain.webp";
import snowIconSrc from "../assets/images/icon-snow.webp";
import stormIconSrc from "../assets/images/icon-storm.webp";
import sunnyIconSrc from "../assets/images/icon-sunny.webp";
import { textPreset6, textPreset7 } from "./GlobalStyles";

const ICONS = {
  drizzle: drizzleIconSrc,
  fog: fogIconSrc,
  overcast: overcastIconSrc,
  partlyCloudy: partlyCloudyIconSrc,
  rain: rainIconSrc,
  snow: snowIconSrc,
  storm: stormIconSrc,
  sunny: sunnyIconSrc,
} as const;

type Forecast = keyof typeof ICONS;

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
  const iconSrc = ICONS[forecast];

  return (
    <Wrapper>
      <Day>{day}</Day>
      <WeatherIcon src={iconSrc} />
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

const WeatherIcon = styled.img`
  width: 60px;
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
