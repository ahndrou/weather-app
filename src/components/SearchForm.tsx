import styled from "styled-components";
import { textPreset5Medium, textPreset7 } from "./GlobalStyles";
import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";

export default function SearchForm() {
  const [focused, setFocused] = useState(false);

  return (
    <Wrapper>
      <SearchBar>
        <SearchIcon src={searchIcon} />
        <Input
          type="search"
          placeholder="Search for a place..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {focused && (
          <Suggestions>
            <Suggestion>City Name</Suggestion>
            <Suggestion>City Name</Suggestion>
            <Suggestion>City Name</Suggestion>
            <Suggestion>City Name</Suggestion>
          </Suggestions>
        )}
      </SearchBar>
      <SearchButton type="button" value="Search" />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  ${textPreset5Medium}

  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const SearchBar = styled.div`
  flex-grow: 1;
  position: relative;
  color: var(--clr-neutral-200);
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 24px;
  color: inherit;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  height: ${56 / 16}rem;
  padding-inline-start: 60px;
  background-color: var(--clr-neutral-800);
  border: none;
  border-radius: 12px;
  font-size: inherit;
  color: inherit;

  &::placeholder {
    color: inherit;
  }
`;

const SearchButton = styled.input`
  background-color: var(--clr-blue-500);
  color: inherit;
  font-style: inherit;
  font-size: inherit;
  padding: 1rem 24px;
  border-radius: 12px;
  border: none;
  flex-basis: 100%;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--clr-blue-700);
  }

  @media screen and (width >= ${768 / 16}rem) {
    flex-basis: auto;
  }
`;

function Suggestions({ children }: { children: React.ReactNode }) {
  return <SuggestionsWrapper>{children}</SuggestionsWrapper>;
}

const SuggestionsWrapper = styled.ul`
  ${textPreset7}
  background-color: var(--clr-neutral-800);
  border: 1px solid var(--clr-neutral-600);
  border-radius: 12px;
  padding: 8px;
  position: absolute;
  top: ${66 / 16}rem;
  width: 100%;
  display: grid;
  gap: ${4 / 16}rem;
`;

function Suggestion({ children }: { children: React.ReactNode }) {
  return (
    <SuggestionWrapper>
      <button>{children}</button>
    </SuggestionWrapper>
  );
}

const SuggestionWrapper = styled.li`
  border-radius: 8px;

  & button {
    all: inherit;
    outline: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    padding: 8px 10px;
  }

  &:hover {
    background-color: var(--clr-neutral-700);
    outline: 1px solid var(--clr-neutral-600);
  }
`;
