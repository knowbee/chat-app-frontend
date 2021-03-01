import * as types from "../action-types/currentUserTypes";
import { currentUser as initialState } from "../initialState";

const currentUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_USER_ACTION_FAILURE:
      return {
        ...state,
        message: payload,
        success: false,
        loading: false,
      };
    case types.SET_USER_ACTION_SUCCESS:
      return {
        ...state,
        message: payload,
        success: true,
        loading: false,
      };
    case types.SET_CURRENT_USER:
      return {
        ...state,
        profile: payload,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
