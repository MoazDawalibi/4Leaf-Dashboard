

import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/static_info",
  ADD: "/static_info",
  DELETE: "/static_info",
  UPDATE: "/static_info",
};

const KEY = "StaticInfo";

export const useGetAllStaticInfo = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddStaticInfo = () => useAddMutation(KEY, API.ADD);
export const useUpdateStaticInfo = (params?: any) => useUpdateMutation(KEY, API.UPDATE);
export const useDeleteStaticInfo = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

