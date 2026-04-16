import styled from "styled-components";

export default function SearchForm() {
  return (
    <form>
      <input type="search" />
      <SearchButton type="button" value="Search" />
    </form>
  );
}

const SearchButton = styled.input`
  background-color: var(--clr-blue-500);
  color: inherit;
  font-style: inherit;
  font-size: inherit;
  padding-block: 16px;
  border-radius: 12px;
  width: 100%;
  border: none;
`;
