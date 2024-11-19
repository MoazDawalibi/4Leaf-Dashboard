import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/grade",
  ADD: "/grade",
  DELETE: "/grade",
  UPDATE: "/grade",
};

const KEY = "grade";

export const useGetAllGrade = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddGrade = () => useAddMutation(KEY, API.ADD);
export const useUpdateGrade = (params?: any) => useUpdateMutation(KEY, API.GET);
export const useDeleteGrade = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
