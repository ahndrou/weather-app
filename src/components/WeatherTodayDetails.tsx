import styled from "styled-components";
import { textPreset3, textPreset6 } from "./GlobalStyles";

interface CurrentWeatherForecast {
  forecast: {
    time: Date;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    precipitation: number;
  };
}

export default function WeatherTodayDetails({
  forecast,
}: CurrentWeatherForecast) {
  const feelsLikeTemp = Math.round(forecast.apparent_temperature);
  const humidity = Math.round(forecast.relative_humidity_2m);
  const wind = Math.round(forecast.wind_speed_10m);
  const precipitation = Math.round(forecast.precipitation);

  return (
    <Wrapper>
      <DetailWrapper>
        <DetailProperty>Feels Like</DetailProperty>
        <DetailValue>{feelsLikeTemp + "°"}</DetailValue>
      </DetailWrapper>

      <DetailWrapper>
        <DetailProperty>Humidity</DetailProperty>
        <DetailValue>{humidity + "%"}</DetailValue>
      </DetailWrapper>

      <DetailWrapper>
        <DetailProperty>Wind</DetailProperty>
        <DetailValue>{wind + " mph"}</DetailValue>
      </DetailWrapper>

      <DetailWrapper>
        <DetailProperty>Precipitation</DetailProperty>
        <DetailValue>{precipitation + " in"}</DetailValue>
      </DetailWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media screen and (width >= ${768 / 16}rem) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (width >= ${1440 / 16}rem) {
    gap: 24px;
  }
`;

const DetailWrapper = styled.div`
  background: var(--clr-neutral-800);
  border: 1px solid var(--clr-neutral-600);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: ${24 / 16}rem;
  height: ${118 / 16}rem;
`;

const DetailProperty = styled.span`
  ${textPreset6}

  display: block;
`;

const DetailValue = styled.span`
  ${textPreset3}

  display: block;
`;
