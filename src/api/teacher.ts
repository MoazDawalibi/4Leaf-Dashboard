import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/teacher",
  ADD: "/teacher",
  DELETE: "/teacher",
  UPDATE: "/teacher",
};

const KEY = "teacher";

export const useGetAllTeacher = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddTeacher = () => useAddMutation(KEY, API.ADD);
export const useUpdateTeacher = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteTeacher = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
