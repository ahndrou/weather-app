import cogIcon from "../assets/images/icon-units.svg";
import dropdownIcon from "../assets/images/icon-dropdown.svg";
import styled from "styled-components";

export default function UnitsDropdown() {
  return (
    <Wrapper>
      <img src={cogIcon} />
      <span>Units</span>
      <img src={dropdownIcon} />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background-color: var(--clr-neutral-800);
  color: var(--clr-neutral-000);
  border: none;
  border-radius: 8px;
  padding-inline: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
