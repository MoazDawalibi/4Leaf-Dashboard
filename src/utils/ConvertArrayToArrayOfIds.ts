export const ConvertArrayToArrayOfIds = (data: any[]) => {
  if (data?.length < 1) {
    return [];
  }
  return data?.map((item: any) => {
    return item?.id ?? item;
  });
};
