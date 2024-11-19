import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/user",
  ADD: "/user",
  DELETE: "/user",
  UPDATE: "/user",
};

const KEY = "user";

export const useGetAllUser = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddUser = () => useAddMutation(KEY, API.ADD);
export const useUpdateUser = (params?: any) => useUpdateMutation(KEY, API.GET);
export const useDeleteUser = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
