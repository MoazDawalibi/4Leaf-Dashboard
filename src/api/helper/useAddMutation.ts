import { useMutation, UseMutationResult } from "react-query";
import useAxios from "./useAxios";
import { filterData } from "../../utils/filterData";
import { HEADER_KEY } from "../config";
import { AxiosResponse } from "../../types/Axios";

function useAddMutation(
  key: string,
  url: string,
  toast: boolean = true,
): UseMutationResult<AxiosResponse, unknown, any, unknown> {
  const axios = useAxios();
  return useMutation<AxiosResponse, unknown, any, unknown>(
    async (dataToSend) => {
      const filterDataToSend = filterData(dataToSend);

      const { data } = await axios.post(url, filterDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          ["X-Custom-Message"]: toast,
          [HEADER_KEY]: key,
        },
      });
      return data;
    },
  );
}

export default useAddMutation;
