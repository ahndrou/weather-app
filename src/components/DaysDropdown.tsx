import styled from "styled-components";
import { textPreset7 } from "./GlobalStyles";
import Select, { components } from "react-select";
import type { WeekDay } from "../helpers/helpers";
import LoadingIndicator from "./LoadingIndicator";

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

interface LoadingProps {
  isLoading: true;
}

interface ReadyProps {
  isLoading?: false;
  selectedDay: WeekDay;
  setSelectedDay: React.Dispatch<React.SetStateAction<WeekDay>>;
}

type DaysDropdownProps = LoadingProps | ReadyProps;

export default function DaysDropdown(props: DaysDropdownProps) {
  if (props.isLoading)
    return (
      <Wrapper
        isLoading={true}
        isSearchable={false}
        classNamePrefix={"react-select"}
        components={selectInnerComponents}
        menuPosition="absolute"
        styles={{
          menu: (base) => ({
            ...base,
            left: "auto",
            right: 0,
          }),
        }}
      />
    );

  if (!props.isLoading) {
    const { selectedDay, setSelectedDay } = props;

    const selectedOption =
      days.find((day) => day.value === selectedDay) ?? null;

    return (
      <Wrapper
        options={days}
        isSearchable={false}
        classNamePrefix={"react-select"}
        components={selectInnerComponents}
        value={selectedOption}
        onChange={(selectedValue) => setSelectedDay(selectedValue!.value)}
        menuPosition="absolute"
        styles={{
          menu: (base) => ({
            ...base,
            right: 0,
          }),
        }}
      />
    );
  }
}

// This is the way the docs recommend providing custom display components for the select.
const selectInnerComponents = {
  IndicatorSeparator: () => null,
  LoadingIndicator: () => null,
  Placeholder: (passedProps) => (
    <components.Placeholder {...passedProps}>
      {passedProps.selectProps.isLoading ? "-" : "Select..."}
    </components.Placeholder>
  ),
};

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
