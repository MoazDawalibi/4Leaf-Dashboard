import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/exam",
  ADD: "/exam",
  DELETE: "/exam",
  UPDATE: "/exam",
};

const KEY = "exam";

export const useGetAllExam = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddExam = () => useAddMutation(KEY, API.ADD);
export const useUpdateExam = (params?: any) => useUpdateMutation(KEY, API.GET);
export const useDeleteExam = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
