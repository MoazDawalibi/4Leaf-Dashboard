import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/notification",
  GET_MINE: "/notification/mine",
  ADD: "/notification",
  DELETE: "/notification",
  UPDATE: "/notification",
};

const KEY = "notification";
const KEY_Mine = "notification_mine";

export const useGetAllNotification = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddNotification = () => useAddMutation(KEY, API.ADD);
export const useUpdateNotification = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteNotification = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

export const useGetAllNotificationMine = (params?: any, options?: any) =>
  useGetQuery(KEY_Mine, API.GET_MINE, params, options);
