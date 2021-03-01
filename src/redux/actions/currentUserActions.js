import {
  SET_CURRENT_USER,
  SET_USER_ACTION_SUCCESS,
  SET_USER_ACTION_FAILURE,
} from "../action-types/currentUserTypes";

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});

export const setCurrentUserSuccess = (payload) => ({
  type: SET_USER_ACTION_SUCCESS,
  message: payload,
});

export const setCurrentUserFailed = (payload) => ({
  type: SET_USER_ACTION_FAILURE,
  message: payload,
});
