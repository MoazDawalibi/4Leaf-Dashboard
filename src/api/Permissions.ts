import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/permission",
  ADD: "/permission",
  DELETE: "/permission",
  UPDATE: "/permission",
};

const KEY = "Permission";

export const useGetAllPermissions = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddPermissions = () => useAddMutation(KEY, API.ADD);
export const useUpdatePermissions = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeletePermissions = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
