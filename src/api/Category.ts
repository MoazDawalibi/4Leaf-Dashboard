

import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/category",
  ADD: "/category",
  DELETE: "/category",
  UPDATE: "/category",
};

const KEY = "Category";

export const useGetAllCategory = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddCategory = () => useAddMutation(KEY, API.ADD);
export const useUpdateCategory = (params?: any) => useUpdateMutation(KEY, API.UPDATE);
export const useDeleteCategory = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

