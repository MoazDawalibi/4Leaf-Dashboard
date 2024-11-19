import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/eduClass",
  ADD: "/eduClass",
  DELETE: "/eduClass",
  UPDATE: "/eduClass",
};

const KEY = "eduClass";

export const useGetAllEduClass = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddEduClass = () => useAddMutation(KEY, API.ADD);
export const useUpdateEduClass = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteEduClass = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
