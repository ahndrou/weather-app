import styled from "styled-components";
import { textPreset7 } from "./GlobalStyles";
import loadingIcon from "../assets/images/icon-loading.svg";
import { useLocationQuery } from "../hooks/useLocationQuery";

export default function SearchResultsList({ query, setChosenLocation }) {
  const { data, isLoading } = useLocationQuery(query);

  return (
    <Results>
      {isLoading ? (
        <LoadingDisplay />
      ) : (
        data?.map((result) => (
          <Result
            key={result.id}
            onClick={() => setChosenLocation(result)}
          >{`${result.name}, ${result.country}`}</Result>
        ))
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

function Result({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: any;
}) {
  return (
    <ResultWrapper>
      <button onClick={onClick} type="button">
        {children}
      </button>
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
