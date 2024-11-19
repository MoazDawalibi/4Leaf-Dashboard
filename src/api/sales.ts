import useAddMutation from "./helper/useAddMutation";
import useGetQuery from "./helper/useGetQuery";

const API = {
  GET: "/resellers/studentPackage",
  ADD: "/resellers/studentPackage/purchase",
  GET_BY_PHONE: "/resellers/studentPackage/student",
  GET_SUMMERY: "/resellers/studentPackage/summery",
};

const KEY = "sales";
const KEYSales = "sales_key";

const KEY2 = "Sale_Student_Data";
const KEY3 = "collection_summery";

export const useGetAllSales = (params?: any, options?: any) =>
  useGetQuery(KEYSales, API.GET, params, options);
export const useAddSales = () => useAddMutation(KEY, API.ADD);
export const useGetStudentByPhone = (params?: any, options?: any) =>
  useGetQuery(KEY2, API.GET_BY_PHONE, params, options);
export const useGetSummery = () => useGetQuery(KEY3, API.GET_SUMMERY);
