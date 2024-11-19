import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/course",
  ADD: "/course",
  DELETE: "/course",
  UPDATE: "/course",
};

const KEY = "course";

export const useGetAllCourse = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddCourse = () => useAddMutation(KEY, API.ADD);
export const useUpdateCourse = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteCourse = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
