export function ConvertEnumToTranslate(enum_value: string): string {
  return `select.enums.${enum_value}`;
}
