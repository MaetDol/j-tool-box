export function connect(...fns: Function[]) {
  return (input: any): unknown => {
    for (const fn of fns) {
      input = fn(input);
    }
    return input;
  };
}
