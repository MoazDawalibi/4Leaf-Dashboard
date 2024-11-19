export const transformPermissions = (Data: string[]) => {
  const newArray: Array<{ name: any; [key: string]: boolean }> = [];
  const hashMap = new Map<string, number>();

  for (let i = 0; i < Data.length; i++) {
    const [permission, value] = Data[i].split("::");
    const existingIndex = hashMap.get(permission);
    // console.log(hashMap);

    if (existingIndex !== undefined) {
      if (value) {
        newArray[existingIndex][value] = true;
      }
      if (
        newArray[existingIndex]["index"] &&
        newArray[existingIndex]["show"] &&
        newArray[existingIndex]["store"] &&
        newArray[existingIndex]["update"] &&
        newArray[existingIndex]["delete"]
      ) {
        newArray[existingIndex]["ALL"] = true;
      }
    } else {
      const newObject = value
        ? ({ name: permission, [value]: true } as any)
        : { name: permission };
      newArray.push(newObject);
      hashMap.set(permission, newArray.length - 1);
    }
  }
  return newArray;
};
