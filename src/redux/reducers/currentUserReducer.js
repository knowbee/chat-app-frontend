import * as types from "../action-types/currentUserTypes";
import { currentUser as initialState } from "../initialState";

const currentUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
