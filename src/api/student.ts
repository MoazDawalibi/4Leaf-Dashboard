import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/student",
  ADD: "/student",
  DELETE: "/student",
  UPDATE: "/student",
  MOVE: "/student/moveStudents",
  IMPORT: "/student/importStudents",
};

const KEY = "student";

export const useGetAllStudent = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params);

export const useGetStudent = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);

export const useAddStudent = () => useAddMutation(KEY, API.ADD);
export const useUpdateStudent = (params?: any) =>
  useUpdateMutation(KEY, API.GET);

export const useDeleteStudent = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

export const useMoveStudent = () => useAddMutation(KEY, API.MOVE);
export const useImportStudent = () => useAddMutation(KEY, API.IMPORT);
