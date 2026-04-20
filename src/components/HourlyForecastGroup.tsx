import styled from "styled-components";
import HourlyForecast from "./HourlyForecast";
import Button from "./Button";

export default function HourlyForecastGroup() {
  return (
    <Wrapper>
      <SectionHeader>
        <Heading>Hourly forecast</Heading>
        <Button color="light">Tuesday</Button>
      </SectionHeader>
      <ForecastGroup>
        <HourlyForecast forecast="sunny" time={4} temp={68} />
        <HourlyForecast forecast="sunny" time={4} temp={68} />
        <HourlyForecast forecast="sunny" time={4} temp={68} />
        <HourlyForecast forecast="sunny" time={4} temp={68} />
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
