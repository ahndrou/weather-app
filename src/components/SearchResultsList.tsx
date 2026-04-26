import styled from "styled-components";
import { textPreset7 } from "./GlobalStyles";
import loadingIcon from "../assets/images/icon-loading.svg";
import { useQuery } from "@tanstack/react-query";

const fetchResults = ({ queryKey }) => {
  const [, searchQuery] = queryKey;

  return fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}`,
  )
    .then((data) => data.json())
    .then((json) => json.results);
};

export default function SearchResultsList({ searchQuery }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["location", searchQuery],
    queryFn: (searchQuery) => fetchResults(searchQuery),
  });

  return (
    <Results>
      {isLoading ? (
        <LoadingDisplay />
      ) : (
        data?.map((result) => <Result>{result.name}</Result>)
      )}
    </Results>
  );
}

function LoadingDisplay() {
  return (
    <LoadingWrapper>
      <img src={loadingIcon} />
      Search in progress
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 8px;
`;

function Results({ children }: { children: React.ReactNode }) {
  return <ResultsWrapper>{children}</ResultsWrapper>;
}

const ResultsWrapper = styled.ul`
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

function Result({ children }: { children: React.ReactNode }) {
  return (
    <ResultWrapper>
      <button>{children}</button>
    </ResultWrapper>
  );
}

const ResultWrapper = styled.li`
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
