

import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/users",
  ADD: "/register",
  UPDATE: "/users",
  LOGIN: `login`,
  LOGOUT: `logout`,
  DELETE : '/users'
};


const KEY = "users";
const KEY2 = "auth";


export const useLogoutAdmin = () => useAddMutation(KEY2, API.LOGOUT, true);
export const useLoginAdmin = () => useAddMutation(KEY2, API.LOGIN, true);

export const useGetAllUsers = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddUsers = () => useAddMutation(KEY, API.ADD);
export const useUpdateUsers = (params?: any) => useUpdateMutation(KEY, API.UPDATE);
export const useDeleteUsers = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
