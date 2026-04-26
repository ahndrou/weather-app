import cogIcon from "../assets/images/icon-units.svg";
import dropdownIcon from "../assets/images/icon-dropdown.svg";
import styled, { css } from "styled-components";
import type React from "react";
import { textPreset7, textPreset8 } from "./GlobalStyles";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  hasStartIcon?: boolean;
};

export default function Button({
  children,
  hasStartIcon,
  ...props
}: ButtonProps) {
  return (
    <Wrapper $hasStartIcon={hasStartIcon} {...props}>
      {hasStartIcon && <img src={cogIcon} />}
      <span>{children}</span>
      <img src={dropdownIcon} />
    </Wrapper>
  );
}

type WrapperProps = {
  $hasStartIcon?: boolean;
};

const withIconStyles = css`
  ${textPreset8}

  padding-block: ${8 / 16}rem;
  padding-inline: 10px;

  @media screen and (width >= ${768 / 16}rem) {
    ${textPreset7}
    padding-block: ${12 / 16}rem;
    padding-inline: ${16 / 16}rem;
  }
`;

const withoutIconStyles = css`
  padding-block: ${8 / 16}rem;
  padding-inline: ${16 / 16}rem;

  ${textPreset7};
`;

const Wrapper = styled.button<WrapperProps>`
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

  ${({ hasStartIcon }) => (hasStartIcon ? withIconStyles : withoutIconStyles)}
`;
