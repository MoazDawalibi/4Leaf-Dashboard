import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/term",
  ADD: "/term",
  DELETE: "/term",
  UPDATE: "/term",
};

const KEY = "term";

export const useGetAllTerm = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddTerm = () => useAddMutation(KEY, API.ADD);
export const useUpdateTerm = (params?: any) => useUpdateMutation(KEY, API.GET);
export const useDeleteTerm = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
