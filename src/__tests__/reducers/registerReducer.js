import reducer from "../../redux/reducers/registerReducer";
import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FORM_SUBMIT,
  CLEAR_REGISTER_FORM,
  REGISTER_FORM,
} from "../../redux/action-types/registerUserTypes";

import store from "../../redux/store";

describe("registerReducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(store.getState().register);
  });

  test("should handle REGISTER_FORM", () => {
    const payload = {
      email: "test@gmail.com",
    };
    const expectedState = {
      type: REGISTER_FORM,
      payload: { field: "email", value: "test@gmail.com" },
    };
    expect(reducer({}, expectedState)).toEqual({
      ...payload,
      errors: {},
      message: "",
    });
  });

  test("should handle REGISTER_SUCCESS", () => {
    const payload = {
      successMessage: "Account created sucessfully",
    };
    const expectedState = {
      type: REGISTER_SUCCESS,
      payload,
    };
    expect(reducer({}, expectedState)).toEqual({
      successMessage: payload.message,
      submitting: false,
    });
  });
  test("should handle REGISTER_FAILURE", () => {
    const payload = {
      message: "Account already exist.",
    };
    const expectedState = {
      type: REGISTER_FAILURE,
      payload,
    };
    expect(reducer({}, expectedState)).toEqual({
      ...payload,
      errors: {},
      submitting: false,
    });
  });
  test("should handle REGISTER_FORM_SUBMIT", () => {
    const payload = {
      submitting: false,
    };
    const expectedState = {
      type: REGISTER_FORM_SUBMIT,
      payload,
    };
    expect(reducer({}, expectedState)).toEqual(payload);
  });
});
