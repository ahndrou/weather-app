import styled from "styled-components";
import DailyForecast from "./DailyForecast";
import { textPreset5 } from "./GlobalStyles";
import { getWeekDay, range, type WeekDayNumber } from "../helpers/helpers";
import type { WeatherCode } from "./WeatherIcon";

interface DailyForecastGroupProps {
  forecast: {
    time: Date[];
    weather_code: Float32Array<ArrayBufferLike> | null;
    temperature_2m_max: Float32Array<ArrayBufferLike> | null;
    temperature_2m_min: Float32Array<ArrayBufferLike> | null;
  };
}

export default function DailyForecastGroup({
  forecast,
}: DailyForecastGroupProps) {
  const forecastLength = forecast.weather_code?.length;

  // It is possible for the data for a given day to be null. i.e. there was
  // no data from the API for that specific day. That is a valid response and
  // so I am handling it here by displaying a default value.
  const dailyForecasts = range(forecastLength as number).map((i) => {
    return {
      weatherCode: forecast.weather_code?.[i] ?? null,
      temperatureMax:
        forecast.temperature_2m_max !== null
          ? Math.round(forecast.temperature_2m_max[i])
          : null,
      temperatureLow:
        forecast.temperature_2m_min !== null
          ? Math.round(forecast.temperature_2m_min[i])
          : null,
      day: forecast.time?.[i].getDay() as WeekDayNumber,
    };
  });

  return (
    <Wrapper>
      <Heading>Daily forecast</Heading>
      <ForecastGroup>
        {dailyForecasts.map((forecast) => {
          return (
            <DailyForecast
              key={forecast.day}
              day={forecast.day}
              high={forecast.temperatureMax}
              low={forecast.temperatureLow}
              weatherCode={forecast.weatherCode as WeatherCode}
            />
          );
        })}
      </ForecastGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  ${textPreset5}

  margin-bottom: ${20 / 16}rem;
`;

const ForecastGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${90 / 16}rem, 1fr));
  gap: 16px;
  flex-grow: 1;
`;
