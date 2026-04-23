import { DropdownMenu } from "radix-ui";
import Button from "./Button";
import styled from "styled-components";
import { textPreset7, textPreset8 } from "./GlobalStyles";
import checkMark from "../assets/images/icon-checkmark.svg";
import { useState } from "react";

export default function UnitsDropdown() {
  const [unitSystem, setUnitSystem] = useState("imperial");
  const usingMetric = unitSystem === "metric";
  const usingImperial = unitSystem === "imperial";

  const switchSystem = () =>
    usingMetric ? setUnitSystem("imperial") : setUnitSystem("metric");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button hasStartIcon>Units</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Content align={"end"} sideOffset={10}>
          <Item>
            <UnitSwitchButton onClick={switchSystem}>
              {usingMetric ? "Switch to Imperial" : "Switch to Metric"}
            </UnitSwitchButton>
          </Item>

          <DropdownMenu.Group>
            <Label>Temperature</Label>
            <Unit active={usingMetric}>Celcius (°C)</Unit>
            <Unit active={usingImperial}>Fahrenheit (°F)</Unit>
          </DropdownMenu.Group>

          <Separator />

          <DropdownMenu.Group>
            <Label>Wind Speed</Label>
            <Unit active={usingMetric}>km/h</Unit>
            <Unit active={usingImperial}>mph</Unit>
          </DropdownMenu.Group>

          <Separator />

          <DropdownMenu.Group>
            <Label>Precipitation</Label>
            <Unit active={usingMetric}>Millimeters (mm)</Unit>
            <Unit active={usingImperial}>Inches (in)</Unit>
          </DropdownMenu.Group>
        </Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

const Content = styled(DropdownMenu.Content)`
  ${textPreset7}

  background-color: var(--clr-neutral-800);
  padding: 6px 8px;
  border-radius: 12px;
  min-width: 214px;
  border: 1px solid var(--clr-neutral-600);
  display: grid;
  gap: 4px;
`;

const Separator = styled(DropdownMenu.Separator)`
  border: 1px solid var(--clr-neutral-600);
`;

const Label = styled(DropdownMenu.Label)`
  ${textPreset8}

  padding: 6px 8px;
  color: var(--clr-neutral-300);
`;

const UnitSwitchButton = styled.button`
  ${textPreset7}

  background-color: inherit;
  border: none;
  padding: 0;
  color: var(--clr-neutral-000);
  cursor: pointer;
`;

type UnitProps = {
  children: React.ReactNode;
  active: boolean;
};

const Unit = ({ children, active }: UnitProps) => {
  return (
    <Item $active={active}>
      {children}
      {active && <img src={checkMark} />}
    </Item>
  );
};

const Item = styled(DropdownMenu.Item)<{ $active?: boolean }>`
  padding: 8px;
  background-color: ${(p) => p.$active && "var(--clr-neutral-700)"};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;
