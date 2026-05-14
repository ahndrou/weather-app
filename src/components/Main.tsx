import styled from "styled-components";
import SearchSection from "./SearchSection";
import WeatherResults from "./WeatherResults";
import { useState } from "react";
import type { LocationResponse } from "../hooks/useLocationQuery";
import useWeatherQuery from "../hooks/useWeatherQuery";
import ErrorDisplay from "./ErrorDisplay";
import { textPreset4 } from "./GlobalStyles";

export default function Main() {
  const [chosenLocation, setChosenLocation] = useState<
    LocationResponse | "NO_RESULTS" | "INITIAL"
  >("INITIAL");
  const weatherQuery = useWeatherQuery(chosenLocation);

  if (chosenLocation === "INITIAL")
    return (
      <Wrapper>
        <SearchSection setChosenLocation={setChosenLocation} />
      </Wrapper>
    );

  if (chosenLocation === "NO_RESULTS")
    return (
      <Wrapper>
        <SearchSection setChosenLocation={setChosenLocation} />
        <NoResultsText>No search result found!</NoResultsText>
      </Wrapper>
    );

  // Note these are two distinct states that I am handling the same way.
  if (weatherQuery.isError || weatherQuery.isPaused) {
    const { refetch } = weatherQuery;

    return <ErrorDisplay refetchQuery={refetch} />;
  }

  if (weatherQuery.isLoading)
    return (
      <Wrapper>
        <SearchSection setChosenLocation={setChosenLocation} />
        <WeatherResults isLoading />
      </Wrapper>
    );

  if (weatherQuery.isSuccess)
    return (
      <Wrapper>
        <SearchSection setChosenLocation={setChosenLocation} />
        <WeatherResults
          chosenLocation={chosenLocation}
          weatherData={weatherQuery.data}
        />
      </Wrapper>
    );
}

const Wrapper = styled.main`
  display: grid;
  gap: 32px;

  /* stylelint-disable */
  @media screen and (width >= ${1440 / 16}rem) {
    /* stylelint-enable */
    gap: 48px;
  }
`;

const NoResultsText = styled.span`
  ${textPreset4}

  text-align: center;
`;
