

import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/shipping_fee",
  ADD: "/shipping_fee",
  DELETE: "/shipping_fee",
  UPDATE: "/shipping_fee",
};

const KEY = "ShippingFees";

export const useGetAllShippingFees = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddShippingFees = () => useAddMutation(KEY, API.ADD);
export const useUpdateShippingFees = (params?: any) => useUpdateMutation(KEY, API.UPDATE);
export const useDeleteShippingFees = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

