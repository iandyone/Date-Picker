export function getFixedValue(value: string) {
  return value.length < 2 ? `0${value}` : value;
}
