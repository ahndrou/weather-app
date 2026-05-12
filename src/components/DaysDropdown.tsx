import styled from "styled-components";
import { textPreset7 } from "./GlobalStyles";
import Select from "react-select";
import type { WeekDay } from "../helpers/helpers";

const days: WeekDayOption[] = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];

// An option object in which the value matches the label. An
// example of a mapped type.
type MatchingOption<T extends string> = {
  [K in T]: {
    value: K;
    label: K;
  };
}[T];

type WeekDayOption = MatchingOption<WeekDay>;

interface DaysDropdownProps {
  selectedDay: WeekDay;
  setSelectedDay: React.Dispatch<React.SetStateAction<WeekDay>>;
}

export default function DaysDropdown({
  selectedDay,
  setSelectedDay,
}: DaysDropdownProps) {
  const selectedOption = days.find((day) => day.value === selectedDay) ?? null;

  return (
    <Wrapper
      options={days}
      isSearchable={false}
      classNamePrefix={"react-select"}
      components={{ IndicatorSeparator: () => null }}
      value={selectedOption}
      onChange={(selectedValue) => setSelectedDay(selectedValue!.value)}
    />
  );
}

// react-select docs suggest styling via their 'styles' prop. I chose to do it
// this way for consistency. Using template strings, I am able to use my CSS fragments
// I have set up already for font styles etc.
// Note they expose a 'className' prop, and so Styled Components can work with it.
const Wrapper = styled(Select<WeekDayOption>)`
  ${textPreset7}

  & .react-select__control {
    background-color: var(--clr-neutral-600);
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }

  & .react-select__control--menu-is-open,
  .react-select__control--is-focused {
    box-shadow: 0 0 0 1px var(--clr-neutral-000);
  }

  & .react-select__indicator {
    color: inherit;
  }

  & .react-select__single-value {
    color: inherit;
  }

  & .react-select__menu {
    background-color: var(--clr-neutral-800);
    border: 1px solid var(--clr-neutral-600);
    border-radius: 12px;
    padding: 8px;
    min-width: fit-content;
  }

  & .react-select__option {
    cursor: pointer;
    border-radius: 8px;
  }

  & .react-select__option--is-focused {
    background-color: var(--clr-neutral-700);
  }

  & .react-select__option--is-selected {
    background-color: inherit;
  }
`;
