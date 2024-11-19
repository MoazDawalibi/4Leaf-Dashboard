import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/ability",
  ADD: "/ability",
  DELETE: "/ability",
  UPDATE: "/ability",
};

const KEY = "ability";

export const useGetAllAbility = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddAbility = () => useAddMutation(KEY, API.ADD);
export const useUpdateAbility = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteAbility = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
