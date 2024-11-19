export const useAddKeyToData = (dataSource: any, identifier = "id") => {
  if (!dataSource || !Array.isArray(dataSource)) {
    return [];
  }
  return dataSource.map((item, index: number) => ({
    ...item,
    key: item[identifier] ?? index,
  }));
};
