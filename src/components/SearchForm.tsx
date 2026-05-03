import styled from "styled-components";
import { textPreset5Medium } from "./GlobalStyles";
import { useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";
import SearchResultsList from "./SearchResultsList";
import useHideOnClickOutside from "../hooks/useHideOnClickOutside";
import type { LocationResponse } from "../hooks/useLocationQuery";

interface SearchFormProps {
  setChosenLocation: React.Dispatch<
    React.SetStateAction<LocationResponse | undefined>
  >;
}

export default function SearchForm({ setChosenLocation }: SearchFormProps) {
  const [showResults, setShowResults] = useState(false);
  const [inputText, setInputText] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const { elementRef } = useHideOnClickOutside<HTMLFormElement>(setShowResults);

  return (
    <Wrapper ref={elementRef}>
      <SearchBar>
        <SearchIcon src={searchIcon} />
        <Input
          type="search"
          placeholder="Search for a place..."
          onFocus={() => setShowResults(true)}
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />

        {showResults && (
          <SearchResultsList
            query={submittedQuery}
            setChosenLocation={setChosenLocation}
          />
        )}
      </SearchBar>
      <SearchButton
        type="button"
        value="Search"
        onClick={() => {
          setShowResults(true);
          setSubmittedQuery(inputText);
        }}
      />
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

  /* stylelint-disable */
  @media screen and (width >= ${768 / 16}rem) {
    /* stylelint-enable */
    flex-basis: auto;
  }
`;
