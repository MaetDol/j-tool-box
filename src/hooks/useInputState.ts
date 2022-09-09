import type { ChangeEvent } from "react";
import React, { useCallback, useState } from "react";
import { connect } from "./connect";

type ChangeTextAreaEvent = ChangeEvent<HTMLTextAreaElement>;
type ChangeInputEvent = ChangeEvent<HTMLInputElement>;
type ChangeRadioEvent = ChangeEvent<HTMLSelectElement>;

function useInputState<T, E extends HTMLElement>(
  defaultValue: T,
  getInputValueThen: (
    dispatcher: React.Dispatch<React.SetStateAction<T>>
  ) => React.ChangeEventHandler<E>
) {
  const [input, setInput] = useState(defaultValue);

  const handler: React.ChangeEventHandler<E> = useCallback(
    getInputValueThen(setInput),
    []
  );

  return [input, handler, setInput] as const;
}

export function useStringInputState(defaultValue: string) {
  return useInputState<string, HTMLInputElement | HTMLTextAreaElement>(
    defaultValue,
    getInputChangeHandler
  );
}

export function useNumberInputState(defaultValue: number) {
  return useInputState<number, HTMLInputElement>(
    defaultValue,
    getNumberInputChangeHandler
  );
}

export function useRadioState<T>(defaultValue: T) {
  return useInputState<T, HTMLInputElement>(
    defaultValue,
    getRadioChangeHandler
  );
}

export function getInputValue(e: ChangeInputEvent | ChangeTextAreaEvent) {
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
