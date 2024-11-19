export const filterData = (data: any) => {
  return Object.entries(data)
    .filter(([_, value]) => value !== null && value !== "")
    .reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {} as { [key: string]: any },
    ); // Adding type assertion here
};
