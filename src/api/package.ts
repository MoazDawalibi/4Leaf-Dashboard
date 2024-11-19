import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/package",
  ADD: "/package",
  DELETE: "/package",
  UPDATE: "/package",
};

const KEY = "package";

export const useGetAllPackage = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddPackage = () => useAddMutation(KEY, API.ADD);
export const useUpdatePackage = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeletePackage = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
