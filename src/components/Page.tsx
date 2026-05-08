import styled from "styled-components";
import Header from "./Header";

import { useState } from "react";
import WeatherResults from "./WeatherResults";
import SearchSection from "./SearchSection";
import { LocationContext } from "../contexts/LocationContext";
import { type LocationResponse } from "../hooks/useLocationQuery";
import useWeatherQuery from "../hooks/useWeatherQuery";

export default function Page() {
  const [chosenLocation, setChosenLocation] = useState<LocationResponse | null>(
    null,
  );

  const weatherQuery = useWeatherQuery(chosenLocation);

  return (
    <LocationContext value={chosenLocation}>
      <Wrapper>
        <Header />
        <Main>
          <SearchSection setChosenLocation={setChosenLocation} />

          {weatherQuery.isSuccess && <WeatherResults />}
          {weatherQuery.isError && "Error!"}
        </Main>
      </Wrapper>
    </LocationContext>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  min-height: 100%;
  max-width: ${1216 / 16}rem;
  margin-inline: auto;
  width: 100%;
  padding: 16px 16px 48px;

  /* stylelint-disable */
  @media screen and (width >= ${1440 / 16}rem) {
    /* stylelint-enable */
    gap: 64px;
  }
`;

const Main = styled.main`
  display: grid;
  gap: 32px;

  /* stylelint-disable */
  @media screen and (width >= ${1440 / 16}rem) {
    /* stylelint-enable */
    gap: 48px;
  }
`;
