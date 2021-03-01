import loginReducer from "../../redux/reducers/loginReducer";

import {
  LOGIN_FAILURE,
  SUBMIT_LOGIN_FORM,
  CLEAR_LOGIN,
} from "../../redux/action-types/loginTypes";

describe("Login Actions", () => {
  test("should return initial state on clear login type", () => {
    const expected = {
      submitting: false,
      credentials: {
        email: "",
        password: "",
      },
    };
    const action = {
      type: CLEAR_LOGIN,
      payload: {},
    };
    expect(loginReducer({}, action)).toEqual(expected);
  });

  test("should change submitting to true on SUBMIT_LOGIN_FORM", () => {
    const initial = {
      submitting: false,
      credentials: {
        email: "",
        password: "",
      },
    };
    const action = {
      type: SUBMIT_LOGIN_FORM,
      payload: {},
    };
    const res = loginReducer(initial, action);
    expect(res.submitting).toEqual(true);
    expect(res.credentials).toBe(initial.credentials);
  });

  test("should add error property to state on LOGIN_FAILURE", () => {
    const initial = {
      submitting: false,
      credentials: {
        email: "",
        password: "",
      },
    };
    const action = {
      type: LOGIN_FAILURE,
      payload: {
        status: 404,
        message: "User not found",
      },
    };
    const res = loginReducer(initial, action);
    expect(res.error.message).toEqual(action.payload.message);
    expect(res.submitting).toEqual(false);
  });
});
