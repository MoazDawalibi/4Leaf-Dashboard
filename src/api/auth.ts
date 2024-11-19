import useAddMutation from "./helper/useAddMutation";

const KEY = "auth";
const API = {
  LOGIN: `login`,
  LOGOUT: `logout`,
};
export const useLoginAdmin = () => useAddMutation(KEY, API.LOGIN, true);
