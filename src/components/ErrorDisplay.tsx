import styled from "styled-components";

import retryIcon from "../assets/images/icon-retry.svg";
import errorIcon from "../assets/images/icon-error.svg";
import { textPreset2, textPreset5, textPreset7 } from "./GlobalStyles";
import type {
  QueryObserverResult,
  RefetchOptions,
} from "@tanstack/react-query";

interface ErrorDisplayProps {
  refetchQuery: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<never, Error>>;
}

export default function ErrorDisplay({ refetchQuery }: ErrorDisplayProps) {
  return (
    <Wrapper>
      <ErrorIcon src={errorIcon} />
      <Heading>Something went wrong</Heading>
      <ErrorDescription>
        We couldn’t connect to the server (API error). Please try again in a few
        moments.
      </ErrorDescription>
      <RetryButton onClick={() => refetchQuery()} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 24px;
`;

const ErrorIcon = styled.img`
  width: 50px;
`;

const Heading = styled.h1`
  ${textPreset2}
`;

const ErrorDescription = styled.span`
  color: var(--clr-neutral-200);
  text-align: center;

  ${textPreset5}
`;

function RetryButton(props: React.ComponentPropsWithoutRef<"button">) {
  return (
    <ButtonWrapper {...props}>
      <img src={retryIcon} />
      <span>Retry</span>
    </ButtonWrapper>
  );
}

//TODO make the 'Button' component more general to account for this.
const ButtonWrapper = styled.button`
  background-color: var(--clr-neutral-800);
  color: var(--clr-neutral-000);
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  ${textPreset7}
`;
