import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

export default function Page() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  min-height: 100%;
  max-width: ${1216 / 16}rem;
  margin-inline: auto;
  width: 100%;
  padding: 16px 16px 48px;

  /* stylelint-disable */
  @media screen and (width >= ${1440 / 16}rem) {
    /* stylelint-enable */
    gap: 64px;
  }
`;
