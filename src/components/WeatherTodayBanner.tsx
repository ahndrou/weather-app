import styled from "styled-components";
import sunImgSrc from "../assets/images/icon-sunny.webp";
import bgImgSmallSrc from "../assets/images/bg-today-small.svg";
import bgImgLargeSrc from "../assets/images/bg-today-large.svg";

import { textPreset1, textPreset4, textPreset6 } from "./GlobalStyles";
import getDate from "../helpers/helpers";
import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import useWeatherData from "../hooks/useWeatherData";

export default function WeatherTodayBanner() {
  const location = useContext(LocationContext);

  let date, name, country;

  if (location !== undefined) {
    date = getDate(location.timezone);
    name = location.name;
    country = location.country;
  }

  const weather = useWeatherData();

  console.log(weather);

  return (
    <Wrapper>
      <TextSection>
        <LocationText>{`${name}, ${country}`}</LocationText>
        <DateText>
          {`${date?.weekday}, ${date?.month} ${date?.day}, ${date?.year}`}
        </DateText>
      </TextSection>

      <TempDisplayWrapper>
        <WeatherIcon src={sunImgSrc} />
        <TempDisplay>{weather.data?.hourly.temperature_2m[1]}</TempDisplay>
      </TempDisplayWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${16 / 16}rem;
  align-items: center;
  padding: 41px 24px;
  border-radius: 20px;
  background-image: url(${bgImgSmallSrc});
  background-size: cover;
  background-position: bottom;

  @media screen and (width >= ${768 / 16}rem) {
    background-image: url(${bgImgLargeSrc});
    flex-direction: row;
  }
`;

const TextSection = styled.div`
  flex-grow: 1;
  text-align: center;

  @media screen and (width >= ${768 / 16}rem) {
    text-align: left;
  }
`;

const LocationText = styled.span`
  ${textPreset4}

  display: block;
  margin-bottom: ${12 / 16}rem;
`;

const DateText = styled.span`
  ${textPreset6}
`;

const TempDisplayWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TempDisplay = styled.span`
  ${textPreset1}
`;

const WeatherIcon = styled.img`
  width: ${120 / 16}rem;
`;
