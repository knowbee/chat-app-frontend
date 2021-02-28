import { SET_CURRENT_USER } from "../action-types/currentUserTypes";

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});
