import logo from "../assets/images/logo.svg";
import styled from "styled-components";
import UnitsDropdown from "./UnitsDropdown";

export default function Header() {
  return (
    <Wrapper>
      <img src={logo} />
      <UnitsDropdown />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;
