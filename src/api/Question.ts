import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateMutation from "./helper/useUpdateMutation";

const API = {
  GET: "/question",
  ADD: "/question",
  DELETE: "/question",
  UPDATE: "/question",
};

const KEY = "question";
const KEY2 = "questionBases";

export const useGetAllQuestion = (params?: any) =>
  useGetQuery(KEY, API.GET, params);
export const useAddQuestion = () => useAddMutation(KEY, API.ADD, true);
export const useAddQuestionAsync = () => useAddMutation(KEY2, API.ADD);

export const useUpdateQuestion = (params?: any) =>
  useUpdateMutation(KEY, API.GET, true);
export const useDeleteQuestion = (params?: any) =>
  useDeleteMutation(KEY, API.DELETE);
