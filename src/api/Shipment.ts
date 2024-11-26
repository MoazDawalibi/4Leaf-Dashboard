

import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/shipment",
  ADD: "/shipment",
  DELETE: "/shipment",
  UPDATE: "/shipment",
};

const KEY = "Shipment";

export const useGetAllShipment = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddShipment = () => useAddMutation(KEY, API.ADD);
export const useUpdateShipment = (params?: any) => useUpdateMutation(KEY, API.UPDATE);
export const useDeleteShipment = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);

