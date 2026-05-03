import { textPreset2 } from "./GlobalStyles";
import type { LocationResponse } from "../hooks/useLocationQuery";

import styled from "styled-components";
import SearchForm from "./SearchForm";

interface SearchSectionProps {
  setChosenLocation: React.Dispatch<
    React.SetStateAction<LocationResponse | undefined>
  >;
}

export default function SearchSection({
  setChosenLocation,
}: SearchSectionProps) {
  return (
    <TopSection>
      <PageTitle>How's the sky looking today?</PageTitle>
      <SearchFormWrapper>
        <SearchForm setChosenLocation={setChosenLocation} />
      </SearchFormWrapper>
    </TopSection>
  );
}

const TopSection = styled.div`
  display: grid;
  gap: 48px;
  max-width: ${731 / 16}rem;
  justify-self: center;

  /* stylelint-disable */
  @media screen and (width >= ${1440 / 16}rem) {
    /* stylelint-enable */
    gap: 64px;
  }
`;

const SearchFormWrapper = styled.div`
  margin-inline: auto;
  width: 100%;

  /* stylelint-disable */
  @media screen and (width >= ${1440 / 16}rem) {
    /* stylelint-enable */
    max-width: ${656 / 16}rem;
  }
`;

const PageTitle = styled.h1`
  ${textPreset2}

  text-align: center;
`;
