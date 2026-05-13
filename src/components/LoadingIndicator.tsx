import styled, { keyframes } from "styled-components";
import { range } from "../helpers/helpers";

export default function LoadingIndicator() {
  return (
    <Wrapper>
      <AnimatedDots />
      <span>Loading...</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 14px;
`;

function AnimatedDots() {
  return (
    <DotsWrapper>
      {range(3).map((i) => (
        <Dot key={i} $index={i} />
      ))}
    </DotsWrapper>
  );
}

const jumpAndFall = keyframes`
    to {
        transform: translateY(-10px);
    }
`;

const DotsWrapper = styled.div`
  color: inherit;
  display: flex;
  gap: 10px;
`;

const Dot = styled.div<{ $index: number }>`
  width: 12px;
  aspect-ratio: 1;
  border-radius: 999px;
  background-color: currentcolor;
  animation: ${jumpAndFall} 1s ${(p) => p.$index * 0.4 + "s"} infinite ease
    alternate;
`;
