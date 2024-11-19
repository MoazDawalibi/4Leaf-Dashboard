import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/examType",
  ADD: "/examType",
  DELETE: "/examType",
  UPDATE: "/examType",
};

const KEY = "examType";

export const useGetAllExamTypes = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddExamTypes = () => useAddMutation(KEY, API.ADD);
export const useUpdateExamTypes = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteExamTypes = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
