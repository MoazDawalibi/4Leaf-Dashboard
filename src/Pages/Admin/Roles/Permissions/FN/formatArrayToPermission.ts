export const formatArrayToPermissions = (
  newArray: Array<{ name: any; [key: string]: boolean }>,
): string[] => {
  const Data: string[] = [];

  newArray.forEach((obj) => {
    const permission = obj.name;
    Object.keys(obj).forEach((key) => {
      if (key !== "name" && key !== "ALL" && obj[key] && obj[key] === true) {
        Data.push(`${permission}::${key}`);
      }
    });
  });

  return Data;
};
