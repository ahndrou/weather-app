import logo from "../assets/images/logo.svg";
import Button from "./Button";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <img src={logo} />
      <Button hasStartIcon color="dark">
        Units
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;
