import styled from "styled-components";
import { textPreset3, textPreset6 } from "./GlobalStyles";

export default function WeatherTodayDetails() {
  return (
    <Wrapper>
      <DetailWrapper>
        <DetailProperty>Feels Like</DetailProperty>
        <DetailValue>64°</DetailValue>
      </DetailWrapper>

      <DetailWrapper>
        <DetailProperty>Humidity</DetailProperty>
        <DetailValue>46%</DetailValue>
      </DetailWrapper>

      <DetailWrapper>
        <DetailProperty>Wind</DetailProperty>
        <DetailValue>9 mph</DetailValue>
      </DetailWrapper>

      <DetailWrapper>
        <DetailProperty>Precipitation</DetailProperty>
        <DetailValue>0 in</DetailValue>
      </DetailWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media screen and (width >= ${768 / 16}rem) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (width >= ${1440 / 16}rem) {
    gap: 24px;
  }
`;

const DetailWrapper = styled.div`
  background: var(--clr-neutral-800);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: ${24 / 16}rem;
`;

const DetailProperty = styled.span`
  ${textPreset6}

  display: block;
`;

const DetailValue = styled.span`
  ${textPreset3}

  display: block;
`;
