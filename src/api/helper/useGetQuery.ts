import { useQuery } from "react-query";
import useAxios from "./useAxios";
import { filterParams } from "../utils/filterParams";
import { useFilterStateState } from "../../zustand/Filter";
function useGetQuery(
  KEY: string | string[],
  url: string,
  params: any = {},
  options: any = {},
) {
  const axios = useAxios();
  const { show, pagination, ...remainingParams } = params;

  const { Filter } = useFilterStateState();
  const page = Filter?.page;
  const per_page = Filter?.per_page;

  const paramToSend = pagination
    ? { page: page, per_page: per_page, ...remainingParams }
    : { ...remainingParams };

  const filteredParams = filterParams(paramToSend);

  return useQuery(
    [KEY, filteredParams, show],
    async () => {
      const response = await axios.get(url + (show ? `/${show}` : ""), {
        params: filteredParams,
      });
      return response?.data ?? [];
    },
    options,
  );
}

export default useGetQuery;
