import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/resellers/studentPackage",
  ADD: "/resellers/studentPackage",
};

const KEY = "studentPackage";

export const useGetAllStudentPackage = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddStudentPackage = () => useAddMutation(KEY, API.ADD);
