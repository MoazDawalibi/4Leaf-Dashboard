

import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/order",
  ADD: "/order",
  DELETE: "/order",
  UPDATE: "/order",
};

const KEY = "Order";

export const useGetAllOrder = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddOrder = () => useAddMutation(KEY, API.ADD);
export const useUpdateOrder = (params?: any) => useUpdateMutation(KEY, API.UPDATE);
export const useDeleteOrder = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

