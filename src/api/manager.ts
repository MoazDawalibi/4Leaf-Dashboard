import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/admin",
  ADD: "/admin",
  DELETE: "/admin",
  UPDATE: "/admin",
};

const KEY = "ADMIN";

export const useGetAllManager = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params);

export const useGetManager = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);

export const useAddManager = () => useAddMutation(KEY, API.ADD);
export const useUpdateManager = (params?: any) =>
  useUpdateMutation(KEY, API.GET);

export const useDeleteManager = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
