import useDeleteMutation from "./helper/useDeleteMutation";
import useAddMutation from "./helper/useAddMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/registrationRecord",
  ADD: "/registrationRecord",
  DELETE: "/registrationRecord",
  UPDATE: "/registrationRecord",
};

const KEY = "registrationRecord";

export const useGetAllRegistrationRecord = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddRegistrationRecord = () => useAddMutation(KEY, API.ADD);
export const useUpdateRegistrationRecord = (params?: any) =>
  useUpdateMutation(KEY, API.GET);
export const useDeleteRegistrationRecord = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
