import useAddMutation from "./helper/useAddMutation";
import useDeleteMutation from "./helper/useDeleteMutation";

const API = {
  ADD: `user`,
  // GET_ALL: `user?notOfType=admin`,
  GET_ALL: `user`,

  DELETE: `user`,
  UPDATE: `user/updateStatus`,
  UPDATE_ADMIN: `updatePassword`,
};
const KEY = "users";

export const useAddUsers = () => useAddMutation(KEY, API.ADD);
export const useUpdateAdmin = () => useAddMutation(KEY, API.UPDATE_ADMIN);

export const useDeleteUsers = () => useDeleteMutation(KEY, API.DELETE);
