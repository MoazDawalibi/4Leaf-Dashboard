export function formatNumber(value: any) {
  const truncatedNumber = Math.trunc(Number(value));
  return new Intl.NumberFormat("en-US").format(truncatedNumber);
}
