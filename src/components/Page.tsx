import styled from "styled-components";
import Header from "./Header";
import SearchForm from "./SearchForm";

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
  display: block;
  width: fit-content;
  margin-inline: auto;
  margin-block-end: ${48 / 16}rem;
  font-size: ${52 / 16}rem;
  text-align: center;
  font-weight: bold;
  font-family: "Bricolage Grotesque", serif;
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
