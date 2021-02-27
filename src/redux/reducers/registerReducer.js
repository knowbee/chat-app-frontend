import {
  REGISTER_FORM,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_FORM_SUBMIT,
  CLEAR_REGISTER_FORM,
} from "../action-types";
import { register as initialState } from "../initialState";

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_FORM:
      return {
        ...state,
        [payload.field]: payload.value,
        errors: {},
        message: "",
      };
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
    case CLEAR_REGISTER_FORM:
      return initialState;

    default:
      return state;
  }
};

export default registerReducer;
