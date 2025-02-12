export function roundNumberUpper(value: number, roundTo: number) {
  if (value > roundTo) return roundTo;

  return value;
}

export function roundNumberLesser(value: number, roundTo: number) {
  if (value < roundTo) return roundTo;

  return value;
}
