export const enumToArray = (enumObj: any) => {
  return Object.keys(enumObj).map((key) => ({
    id: enumObj[key],
    name: `select.enums.${enumObj[key]}`,
  }));
};
