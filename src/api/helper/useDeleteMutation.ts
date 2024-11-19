import { useMutation, UseMutationResult } from "react-query";
import useAxios from "./useAxios";
import { HEADER_KEY } from "../config";
import { AxiosResponse } from "../../types/Axios";
import { useDataTableState } from "../../zustand/TabState";
import { useFilterStateState } from "../../zustand/Filter";

type DataToSend = {
  id?: number | string | any;
  key?: string | any;
};

function useDeleteMutation(
  key: any,
  url: string,
  toast: boolean = true,
): UseMutationResult<AxiosResponse, unknown, DataToSend, unknown> {
  const axios = useAxios();
  const { DataTableLength } = useDataTableState();
  const { setFilter, Filter } = useFilterStateState();
  const page = Filter?.page;
  return useMutation<AxiosResponse, unknown, DataToSend, unknown>(
    async (dataToSend) => {
      const { data } = await axios.delete(url + `/` + dataToSend?.id, {
        headers: {
          [HEADER_KEY]: key,
          ["X-Custom-Message"]: toast,
        },
      });

      return data;
    },
    {
      onSuccess: (data) => {
        if (DataTableLength === 1 && page > 1) {
          setFilter({
            ...Filter,
            page: page - 1,
          });
        }
      },
    },
  );
}

export default useDeleteMutation;
