import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/lesson",
  ADD: "/lesson",
  DELETE: "/lesson",
  UPDATE: "/lesson",
  ORDER: "/lesson/order",
};

const KEY = "lesson";

export const useGetAllLesson = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddLesson = () => useAddMutation(KEY, API.ADD);
export const useUpdateLesson = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteLesson = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

export const useUpdateLessonOrder = (params?: any) =>
  useAddMutation("karim", API.ORDER);
