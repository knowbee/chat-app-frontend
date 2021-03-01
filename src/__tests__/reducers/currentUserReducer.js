import reducer from "../../redux/reducers/currentUserReducer";
import {
  SET_CURRENT_USER,
  SET_USER_ACTION_FAILURE,
  SET_USER_ACTION_SUCCESS,
} from "../../redux/action-types/currentUserTypes";
import store from "../../redux/store";
import { currentUser as initialState } from "../../redux/initialState";
import { newUser } from "../../__mocks__/dummyData";

describe("currentUserReducer", () => {
  it("should return the initial `state`", () => {
    expect(reducer(undefined, {})).toEqual(store.getState().currentUser);
  });

  it("should handle `SET_CURRENT_USER`", () => {
    const expectedState = {
      type: SET_CURRENT_USER,
      payload: newUser,
    };
    expect(reducer({}, expectedState)).toEqual({
      isLoggedIn: true,
      profile: newUser,
    });
  });
  it("should handle `SET_USER_ACTION_FAILURE`", () => {
    const expectedState = {
      type: SET_USER_ACTION_FAILURE,
      payload: "FAILED",
    };
    expect(reducer({}, expectedState)).toEqual({
      message: "FAILED",
      success: false,
      loading: false,
    });
  });
  it("should handle `SET_USER_ACTION_SUCCESS`", () => {
    const expectedState = {
      type: SET_USER_ACTION_SUCCESS,
      payload: "SUCCESS",
    };
    expect(reducer({}, expectedState)).toEqual({
      message: "SUCCESS",
      success: true,
      loading: false,
    });
  });
});
