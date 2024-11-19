import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/city",
  ADD: "/city",
  DELETE: "/city",
  UPDATE: "/city",
};

const KEY = "city";

export const useGetAllCity = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddCity = () => useAddMutation(KEY, API.ADD);
export const useUpdateCity = (params?: any) => useUpdateMutation(KEY, API.GET);
export const useDeleteCity = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
