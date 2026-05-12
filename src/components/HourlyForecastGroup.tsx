import styled from "styled-components";
import HourlyForecast from "./HourlyForecast";
import DaysDropdown from "./DaysDropdown";
import { useState } from "react";
import type { ParsedWeatherResponse } from "../hooks/useWeatherQuery";
import { type WeekDay } from "../helpers/helpers";

interface HourlyForecastGroupProps {
  forecast: ParsedWeatherResponse["hourlyGroupedByDay"];
}

export default function HourlyForecastGroup({
  forecast,
}: HourlyForecastGroupProps) {
  const [displayedForecastDay, setDisplayedForecastDay] =
    useState<WeekDay>("Tuesday");

  const displayedForecast = forecast[displayedForecastDay];

  if (displayedForecast === undefined) {
    throw new Error("No data in API response for chosen day!");
  }

  return (
    <Wrapper>
      <SectionHeader>
        <Heading>Hourly forecast</Heading>
        <DaysDropdown />
      </SectionHeader>
      <ForecastGroup>
        {displayedForecast.map((timeSlot) => (
          <HourlyForecast
            weatherCode={timeSlot.weatherCode!}
            time={timeSlot.time.getHours()}
            temp={Math.round(timeSlot.temperature!)}
          />
        ))}
      </ForecastGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-neutral-800);
  border-radius: 20px;
  padding: 20px 16px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${16 / 16}rem;
`;

const Heading = styled.h2`
  margin-inline-end: 0.5rem;
`;

const ForecastGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${16 / 16}rem;
`;
