import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_FORM_SUBMIT,
} from "../action-types";
import { register as initialState } from "../initialState";

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_FORM_SUBMIT:
      return {
        ...state,
        submitting: payload.submitting,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        message: payload.message,
        submitting: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        message: payload.message,
        errors: payload.errors || {},
        submitting: false,
      };
    default:
      return state;
  }
};

export default registerReducer;
