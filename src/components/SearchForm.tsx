import styled from "styled-components";
import { Search } from "react-feather";

export default function SearchForm() {
  return (
    <Wrapper>
      <SearchBar>
        <Search />
        <Input type="search" placeholder="Search for a place..." />
      </SearchBar>
      <SearchButton type="button" value="Search" />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const SearchBar = styled.div`
  flex-grow: 1;
  position: relative;
  color: var(--clr-neutral-200);

  /* 
  'Reaching in' to style another element here, going against the 'single source of styles'
  principle. The first child here though is from an external library for which I don't control the
  main styling. 
  */
  & *:first-child {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 24px;
    color: inherit;
  }
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

  @media screen and (width >= 400px) {
    flex-basis: auto;
  }
`;
