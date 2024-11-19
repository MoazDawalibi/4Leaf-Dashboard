import { useMutation, UseMutationResult } from "react-query";
import useAxios from "./useAxios";
import { HEADER_KEY } from "../config";
import { AxiosResponse } from "../../types/Axios";

const useUpdateMutation = (
  key: string,
  url: string,
  toast: boolean = true,
): UseMutationResult<AxiosResponse, any, any, any> => {
  const axios = useAxios();

  return useMutation<AxiosResponse, any, any>(async (dataToSend) => {
    let request = null;
    let id = null;

    if (dataToSend instanceof FormData) {
      dataToSend.append("_method", "PUT");
      request = dataToSend;
      id = dataToSend.get("id");
      console.log(dataToSend);
    } else {
      request = { ...dataToSend, _method: "PUT" };
      id = dataToSend?.id || dataToSend?.key;
    }

    const { data } = await axios.post(url + `/` + id, request, {
      headers: {
        "Content-Type": "multipart/form-data",
        [HEADER_KEY]: key,
        ["X-Custom-Message"]: toast,
      },
    });
    return data;
  });
};

export default useUpdateMutation;
