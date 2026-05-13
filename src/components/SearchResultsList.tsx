import styled from "styled-components";
import { textPreset7 } from "./GlobalStyles";
import loadingIcon from "../assets/images/icon-loading.svg";
import {
  useLocationQuery,
  type LocationResponse,
} from "../hooks/useLocationQuery";

interface SearchResultsListProps {
  submittedSearch: string;
  setChosenLocation: React.Dispatch<
    React.SetStateAction<LocationResponse | null>
  >;
  setListVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchResultsList({
  submittedSearch,
  setChosenLocation,
  setListVisible,
  setInputText,
}: SearchResultsListProps) {
  const { data, isLoading } = useLocationQuery(submittedSearch);

  const handleResultClick = (
    result: LocationResponse,
    resultDisplayedText: string,
  ) => {
    setChosenLocation(result);
    setListVisible(false);
    setInputText(resultDisplayedText);
  };

  return (
    <Results>
      {isLoading ? (
        <LoadingDisplay />
      ) : (
        data?.map((result) => {
          const displayedText = [
            result.name,
            result.admin1,
            result.admin2,
            result.admin3,
            result.country,
          ]
            .filter((datum) => datum !== undefined)
            .join(", ");
          return (
            <Result
              key={result.id}
              onClick={() => handleResultClick(result, displayedText)}
            >
              {displayedText}
            </Result>
          );
        })
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

interface ResultProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Result({ children, onClick }: ResultProps) {
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
