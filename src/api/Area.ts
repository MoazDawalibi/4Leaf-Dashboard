import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/area",
  ADD: "/area",
  DELETE: "/area",
  UPDATE: "/area",
};

const KEY = "Area";

export const useGetAllArea = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddArea = () => useAddMutation(KEY, API.ADD);
export const useUpdateArea = (params?: any) => useUpdateMutation(KEY, API.GET);
export const useDeleteArea = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
