import useGetQuery from "./helper/useGetQuery";

const API = {
  GET: "/resellers/financialCollection",
};

const KEY = "collections";

export const useGetAllCollections = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
