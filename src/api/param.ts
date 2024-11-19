import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/param",
  ADD: "/param",
  DELETE: "/param",
  UPDATE: "/param",
};

const KEY = "param";

export const useGetAllParam = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddParam = () => useAddMutation(KEY, API.ADD);
export const useUpdateParam = (params?: any) => useUpdateMutation(KEY, API.GET);
export const useDeleteParam = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
