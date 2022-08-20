import React, { useCallback, useState } from "react";
import { connect } from "./connect";

type ChangeInputEvent = React.ChangeEvent<HTMLInputElement>;
type ChangeRadioEvent = React.ChangeEvent<HTMLSelectElement>;

function useInputState<T>(
  defaultValue: T,
  getInputValueThen: (
    dispatcher: React.Dispatch<React.SetStateAction<T>>
  ) => (event: ChangeInputEvent) => void
) {
  const [input, setInput] = useState(defaultValue);

  const handler: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    getInputValueThen(setInput),
    []
  );

  return [input, handler, setInput] as const;
}

export function useStringInputState(defaultValue: string) {
  return useInputState<string>(defaultValue, getInputChangeHandler);
}

export function useNumberInputState(defaultValue: number) {
  return useInputState<number>(defaultValue, getNumberInputChangeHandler);
}

export function getInputValue(e: ChangeInputEvent) {
  return e.target.value;
}

export function getInputValueAsNumber(e: ChangeInputEvent) {
  return e.target.valueAsNumber;
}

export function getRadioValue(e: ChangeRadioEvent) {
  return e.target.value;
}

export function getInputChangeHandler(handler: (value: string) => void) {
  return connect(getInputValue, handler);
}

export function getNumberInputChangeHandler(handler: (value: number) => void) {
  return connect(getInputValueAsNumber, handler);
}

export function getRadioChangeHandler<T>(handler: (value: T) => void) {
  return connect(getRadioValue, handler);
}
