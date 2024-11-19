import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/tag",
  ADD: "/tag",
  DELETE: "/tag",
  UPDATE: "/tag",
};

const KEY = "tag";

export const useGetAllTag = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddTag = () => useAddMutation(KEY, API.ADD);
export const useUpdateTag = (params?: any) => useUpdateMutation(KEY, API.GET);
export const useDeleteTag = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
