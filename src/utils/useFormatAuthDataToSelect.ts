const useFormatAuthDataToSelect = (Data: any) => {
  const format = (data: any) => {
    if (!Array.isArray(data)) return []; // Check if data is an array
    return data?.map((item: any) => ({
      value: item?.id,
      label: item?.name ?? item?.starting_date,
      ...item,
    }));
  };

  return format(Data);
};

export default useFormatAuthDataToSelect;
