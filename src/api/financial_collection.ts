import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/financialCollection",
  ADD: "/financialCollection",
  DELETE: "/financialCollection",
  UPDATE: "/financialCollection",
};

const KEY = "financialCollection";

export const useGetAllFinancialCollection = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddFinancialCollection = () => useAddMutation(KEY, API.ADD);
export const useUpdateFinancialCollection = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteFinancialCollection = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
