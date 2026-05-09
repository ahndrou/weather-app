import styled from "styled-components";
import { textPreset3, textPreset6 } from "./GlobalStyles";
import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import useWeatherQuery from "../hooks/useWeatherQuery";
import { roundIfDefined } from "../helpers/helpers";

export default function WeatherTodayDetails() {
  const chosenLocation = useContext(LocationContext);
  const weatherQuery = useWeatherQuery(chosenLocation);

  const currentWeather = weatherQuery.data?.current;

  const feelsLikeTemp = roundIfDefined(currentWeather?.apparent_temperature);
  const humidity = roundIfDefined(currentWeather?.relative_humidity_2m);
  const wind = roundIfDefined(currentWeather?.wind_speed_10m);
  const precipitation = roundIfDefined(currentWeather?.precipitation);

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
`;

const DetailProperty = styled.span`
  ${textPreset6}

  display: block;
`;

const DetailValue = styled.span`
  ${textPreset3}

  display: block;
`;
