export const formatAbilityData = (Data: any[]) => {
  const newArray: Array<{ name: any; [key: string]: boolean }> = [];

  for (let i = 0; i < Data.length; i++) {
    const currentObject = Data?.[i];
    const newObjectShape = {
      name: currentObject?.name,
      delete: typeof currentObject?.delete === "boolean" ? false : "disabled",
      index: typeof currentObject?.index === "boolean" ? false : "disabled",
      show: typeof currentObject?.show === "boolean" ? false : "disabled",
      store: typeof currentObject?.store === "boolean" ? false : "disabled",
      update: typeof currentObject?.update === "boolean" ? false : "disabled",
    } as any;

    newArray.push(newObjectShape);
  }

  return newArray;
};
