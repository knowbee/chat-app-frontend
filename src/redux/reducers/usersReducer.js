import * as types from "../action-types/usersTypes";
import { users as initialState } from "../initialState";

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCHING_USERS:
      return {
        ...state,
        fetching: false,
      };
    case types.FETCHED_USERS_SUCCESSFULLY:
      return {
        ...state,
        chats: payload,
        fetching: false,
      };
    case types.FAILED_FETCHING_USERS:
      return {
        ...state,
        errors: payload.errors || {},
        fetching: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
