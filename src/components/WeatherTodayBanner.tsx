import styled from "styled-components";
import bgImgSmallSrc from "../assets/images/bg-today-small.svg";
import bgImgLargeSrc from "../assets/images/bg-today-large.svg";

import { textPreset1, textPreset4, textPreset6 } from "./GlobalStyles";
import { getDate } from "../helpers/helpers";
import type { LocationResponse } from "../hooks/useLocationQuery";
import WeatherIcon, { type WeatherCode } from "./WeatherIcon";

interface LoadingProps {
  loading: true;
}

interface ReadyProps {
  loading?: false;
  location: LocationResponse;
  forecast: {
    time: Date;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    precipitation: number;
    weather_code: number;
  };
}

type WeatherTodayBannerProps = LoadingProps | ReadyProps;

export default function WeatherTodayBanner(props: WeatherTodayBannerProps) {
  if (props.loading)
    return (
      <LoadingWrapper>
        <p>Loading!</p>
      </LoadingWrapper>
    );

  if (!props.loading) {
    const { location, forecast } = props;

    const date = getDate(location.timezone);

    return (
      <Wrapper>
        <TextSection>
          <LocationText>{`${location.name}, ${location.country}`}</LocationText>
          <DateText>
            {`${date.weekday}, ${date.month} ${date.day}, ${date.year}`}
          </DateText>
        </TextSection>

        <TempDisplayWrapper>
          <WeatherIcon
            forecast={forecast.weather_code as WeatherCode}
            size="large"
          />
          <TempDisplay>{Math.round(forecast.temperature_2m) + "°"}</TempDisplay>
        </TempDisplayWrapper>
      </Wrapper>
    );
  }
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

  /* stylelint-disable */
  @media screen and (width >= ${768 / 16}rem) {
    /* stylelint-enable */
    background-image: url(${bgImgLargeSrc});
    flex-direction: row;
  }
`;

const LoadingWrapper = styled(Wrapper)`
  ${textPreset6}

  background: var(--clr-neutral-800);
  justify-content: center;
`;

const TextSection = styled.div`
  flex-grow: 1;
  text-align: center;

  /* stylelint-disable */
  @media screen and (width >= ${768 / 16}rem) {
    /* stylelint-enable */
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
