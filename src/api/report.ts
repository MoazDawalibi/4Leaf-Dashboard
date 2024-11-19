import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/report",
  ADD: "/report",
  DELETE: "/report",
  UPDATE: "/report",
};

const KEY = "report";

export const useGetAllReport = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);

export const useAddReport = () => useAddMutation(KEY, API.ADD);
export const useUpdateReport = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteReport = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
