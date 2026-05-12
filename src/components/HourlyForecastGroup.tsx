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
        <DaysDropdown
          selectedDay={displayedForecastDay}
          setSelectedDay={setDisplayedForecastDay}
        />
      </SectionHeader>
      <ForecastGroup>
        {displayedForecast.map((timeSlot) => (
          <HourlyForecast
            key={timeSlot.time.getMilliseconds()}
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
  --inline-padding: 16px;

  background-color: var(--clr-neutral-800);
  border-radius: 20px;
  padding: 20px var(--inline-padding);
  height: ${693 / 16}rem;
  display: flex;
  flex-direction: column;
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
  --scrollbar-width: 6px;

  display: flex;
  flex-direction: column;
  gap: ${16 / 16}rem;
  overflow-y: scroll;

  /* Moving scrollbar to the parent's border. */
  margin-inline-end: calc(-1 * var(--inline-padding));
  padding-inline-end: calc(var(--inline-padding) - var(--scrollbar-width));

  /* Webkit browsers offer greater styling control. */
  &::-webkit-scrollbar {
    width: var(--scrollbar-width);
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-neutral-700);
    border: 1px solid var(--clr-neutral-600);
    border-radius: 999px;
  }

  /* Firefox fallback: just means we can't style outline on the thumb part. */
  @supports (-moz-appearance: none) {
    scrollbar-width: thin;
    scrollbar-color: var(--clr-neutral-700) transparent;
  }
`;
