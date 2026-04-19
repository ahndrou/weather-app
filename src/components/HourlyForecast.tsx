import styled from "styled-components";
import type { Forecast } from "./WeatherIcon";
import WeatherIcon from "./WeatherIcon";
import { textPreset5Medium, textPreset7 } from "./GlobalStyles";

type HourlyForecastProps = {
  forecast: Forecast;
  time: number;
  temp: number;
};

export default function HourlyForecast({
  forecast,
  time,
  temp,
}: HourlyForecastProps) {
  return (
    <Wrapper>
      <WeatherIcon forecast={forecast} />
      <Time>{time} PM</Time>
      <Temp>{temp}°</Temp>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-neutral-700);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 10px 16px 10px 12px;
`;

const Time = styled.span`
  ${textPreset5Medium}
`;

const Temp = styled.span`
  ${textPreset7}

  flex-grow: 1;
  text-align: end;
`;
