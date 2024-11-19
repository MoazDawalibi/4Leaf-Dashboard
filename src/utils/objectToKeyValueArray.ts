export function objectToKeyValueArray(
  obj: { [key: string]: any } | null | undefined,
): Array<{ key: string; value: any }> {
  if (!obj) {
    return [{ key: "", value: "" }];
  }
  return Object.entries(obj).map(([key, value]) => ({
    key,
    value,
  }));
}
