import styled from "styled-components";
import Header from "./Header";
import SearchForm from "./SearchForm";
import { textPreset2 } from "./GlobalStyles";
import WeatherInfoBanner from "./WeatherTodayBanner";
import WeatherTodayDetails from "./WeatherTodayDetails";
import DailyForecastGroup from "./DailyForecastGroup";
import HourlyForecastGroup from "./HourlyForecastGroup";
import { useState } from "react";
import { LocationContext } from "../contexts/LocationContext";

export default function Page() {
  const [chosenLocation, setChosenLocation] = useState("");

  return (
    <LocationContext value={chosenLocation}>
      <Wrapper>
        <Header />
        <Main>
          <TopSection>
            <PageTitle>How's the sky looking today?</PageTitle>
            <SearchFormWrapper>
              <SearchForm setChosenLocation={setChosenLocation} />
            </SearchFormWrapper>
          </TopSection>

          <GridSection>
            <WeatherInfoBanner />
            <WeatherTodayDetails />
            <DailyForecastGroup />
            <HourlyForecastGroup />
          </GridSection>
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

  @media screen and (width >= ${1440 / 16}rem) {
    gap: 64px;
  }
`;

const Main = styled.main`
  display: grid;
  gap: 32px;

  @media screen and (width >= ${1440 / 16}rem) {
    gap: 48px;
  }
`;

const TopSection = styled.div`
  display: grid;
  gap: 48px;
  max-width: ${731 / 16}rem;
  justify-self: center;

  @media screen and (width >= ${1440 / 16}rem) {
    gap: 64px;
  }
`;

const SearchFormWrapper = styled.div`
  margin-inline: auto;
  width: 100%;

  @media screen and (width >= ${1440 / 16}rem) {
    max-width: ${656 / 16}rem;
  }
`;

const PageTitle = styled.h1`
  ${textPreset2}

  text-align: center;
`;

const GridSection = styled.div`
  display: grid;
  gap: 32px;

  @media screen and (width >= ${1440 / 16}rem) {
    grid-template-columns: repeat(3, 1fr);

    & > :not(:last-child) {
      grid-column: 1 / -2;
    }

    & > :last-child {
      grid-column: -2;
      grid-row: 1 / span 3;
    }
  }
`;
