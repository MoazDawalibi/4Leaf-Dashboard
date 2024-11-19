import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/reseller",
  ADD: "/reseller",
  DELETE: "/reseller",
  UPDATE: "/reseller",

  GET_COLLECTION: "/financialCollection",
  Update_COLLECTION: "/financialCollection",
  DELETE_COLLECTION: "/financialCollection",

  GET_SAlES: "/reseller/getStudentPackage",
};

const KEY = "reseller";
const KEY_SALE = "reseller_sale";
const KEY_COLLECTION = "reseller_collection";

export const useGetAllReseller = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddReseller = () => useAddMutation(KEY, API.ADD);
export const useUpdateReseller = () => useUpdateMutation(KEY, API.GET);
export const useDeleteReseller = () => useDeleteMutation(KEY, API.DELETE);

export const useGetAllResellerCollection = (params?: any, options?: any) =>
  useGetQuery(KEY_COLLECTION, API.GET_COLLECTION, params, options);
export const useUpdateResellerCollection = () =>
  useUpdateMutation(KEY_COLLECTION, API.Update_COLLECTION);
export const useDeleteResellerCollection = () =>
  useDeleteMutation(KEY_COLLECTION, API.DELETE_COLLECTION);

export const useGetAllResellerSales = (params?: any, options?: any) =>
  useGetQuery(KEY_SALE, API.GET_SAlES, params, options);
