

import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/product",
  ADD: "/product",
  DELETE: "/product",
  UPDATE: "/product",
};

const KEY = "Product";

export const useGetAllProduct = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddProduct = () => useAddMutation(KEY, API.ADD);
export const useUpdateProduct = (params?: any) => useUpdateMutation(KEY, API.UPDATE);
export const useDeleteProduct = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

