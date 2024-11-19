import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/subject",
  ADD: "/subject",
  DELETE: "/subject",
  UPDATE: "/subject",
};

const KEY = "subject";

export const useGetAllSubject = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddSubject = () => useAddMutation(KEY, API.ADD);
export const useUpdateSubject = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteSubject = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
