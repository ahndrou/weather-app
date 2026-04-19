import styled from "styled-components";
import Header from "./Header";
import SearchForm from "./SearchForm";
import { textPreset2 } from "./GlobalStyles";
import WeatherInfoBanner from "./WeatherTodayBanner";
import WeatherTodayDetails from "./WeatherTodayDetails";
import DailyForecastGroup from "./DailyForecastGroup";
import HourlyForecastGroup from "./HourlyForecastGroup";

export default function Page() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <PageTitle>How's the sky looking today?</PageTitle>
        <SearchForm />
        <WeatherInfoBanner />
        <WeatherTodayDetails />
        <DailyForecastGroup />
        <HourlyForecastGroup />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 100%;
  padding: 16px 16px 48px;
`;

const PageTitle = styled.h1`
  ${textPreset2}

  text-align: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 32px;
`;
