import styled from "styled-components";
import Header from "./Header";
import SearchForm from "./SearchForm";
import { textPreset2 } from "./GlobalStyles";

export default function Page() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <BannerText>How's the sky looking today?</BannerText>
        <SearchForm />
      </Main>
    </Wrapper>
  );
}

const BannerText = styled.span`
  ${textPreset2}

  display: block;
  width: fit-content;
  margin-inline: auto;
  margin-block-end: ${48 / 16}rem;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 16px 16px 48px;
`;

const Main = styled.main`
  flex-grow: 1;
`;
