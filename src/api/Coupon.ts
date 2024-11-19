import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/coupon",
  ADD: "/coupon",
  DELETE: "/coupon",
  UPDATE: "/coupon",
};

const KEY = "Coupon";

export const useGetAllCoupon = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddCoupon = () => useAddMutation(KEY, API.ADD);
export const useUpdateCoupon = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteCoupon = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
