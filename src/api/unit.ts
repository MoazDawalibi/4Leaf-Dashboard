import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/unit",
  ADD: "/unit",
  DELETE: "/unit",
  UPDATE: "/unit",
  ORDER: "/unit/order",
};

const KEY = "unit";
export const useGetAllUnit = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddUnit = () => useAddMutation(KEY, API.ADD);
export const useUpdateUnit = (params?: any) => useUpdateMutation(KEY, API.GET);
export const useUpdateUnitOrder = (params?: any, option?: any) =>
  useAddMutation("karim", API.ORDER, true);
export const useDeleteUnit = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
