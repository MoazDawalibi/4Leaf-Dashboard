import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/curriculum",
  ADD: "/curriculum",
  DELETE: "/curriculum",
  UPDATE: "/curriculum",
};

const KEY = "Curriculum";

export const useGetAllCurriculum = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddCurriculum = () => useAddMutation(KEY, API.ADD);
export const useUpdateCurriculum = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteCurriculum = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
