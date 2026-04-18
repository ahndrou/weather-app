import styled from "styled-components";
import DailyForecast from "./DailyForecast";
import { textPreset5 } from "./GlobalStyles";

export default function DailyForecastGroup() {
  return (
    <div>
      <Heading>Daily forecast</Heading>
      <ForecastGroup>
        <DailyForecast day="Tue" forecast={"fog"} high={68} low={50} />
        <DailyForecast day="Tue" forecast={"snow"} high={68} low={50} />
        <DailyForecast day="Tue" forecast={"rain"} high={68} low={50} />
        <DailyForecast day="Tue" forecast={"drizzle"} high={68} low={50} />
        <DailyForecast day="Tue" forecast={"sunny"} high={68} low={50} />
        <DailyForecast day="Tue" forecast={"storm"} high={68} low={50} />
        <DailyForecast day="Tue" forecast={"partlyCloudy"} high={68} low={50} />
      </ForecastGroup>
    </div>
  );
}

const Heading = styled.h2`
  ${textPreset5}

  margin-bottom: ${20 / 16}rem;
`;

const ForecastGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${104 / 16}rem, 1fr));
  gap: 16px;
`;
