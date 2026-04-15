import logo from "../assets/images/logo.svg"
import UnitsDropdown from "./UnitsDropDown"
import styled from "styled-components"

export default function Header() {
    return (
    <Wrapper>
        <img src={logo} />
        <UnitsDropdown />
    </Wrapper>
    )
}

const Wrapper = styled.header`
    background-color: red;
`