export function findLabelByValue(
  array: { label: string; value: string | "" }[],
  value: string | "",
): string | undefined {
  const item = array.find((item) => item.value === value);
  return item ? item.label : undefined;
}
