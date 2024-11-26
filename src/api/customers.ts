

import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/customer",
  ADD: "/customer",
  DELETE: "/customer",
  UPDATE: "/customer",
};

const KEY = "customers";

export const useGetAllCustomers = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddCustomers = () => useAddMutation(KEY, API.ADD);
export const useUpdateCustomers = (params?: any) => useUpdateMutation(KEY, API.UPDATE);
export const useDeleteCustomers = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

