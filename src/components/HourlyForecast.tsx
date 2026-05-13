import styled from "styled-components";
import type { WeatherCode } from "./WeatherIcon";
import WeatherIcon from "./WeatherIcon";
import { textPreset5Medium, textPreset7 } from "./GlobalStyles";

interface LoadingProps {
  loading: true;
}

interface ReadyProps {
  loading?: false;
  weatherCode: WeatherCode;
  time: number;
  temp: number;
}

type HourlyForecastProps = LoadingProps | ReadyProps;

export default function HourlyForecast(props: HourlyForecastProps) {
  if (props.loading) return <Wrapper />;

  if (!props.loading) {
    const { weatherCode, time, temp } = props;

    return (
      <Wrapper>
        <WeatherIcon size="small" forecast={weatherCode} />
        <Time>{time} PM</Time>
        <Temp>{temp}°</Temp>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: var(--clr-neutral-700);
  border: 1px solid var(--clr-neutral-600);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px 10px 12px;
  min-height: ${60 / 16}rem;
`;

const Time = styled.span`
  ${textPreset5Medium}
`;

const Temp = styled.span`
  ${textPreset7}

  flex-grow: 1;
  text-align: end;
`;
