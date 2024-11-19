import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/role",
  ADD: "/role",
  DELETE: "/role",
  UPDATE: "/role",
  MOVE: "/role",
  IMPORT: "/role",
};

const KEY = "role";

export const useGetAllRole = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params);

export const useGetRole = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);

export const useAddRole = () => useAddMutation(KEY, API.ADD);
export const useUpdateRole = (params?: any) => useUpdateMutation(KEY, API.GET);

export const useDeleteRole = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

export const useMoverole = () => useAddMutation(KEY, API.MOVE);
export const useImportrole = () => useAddMutation(KEY, API.IMPORT);
