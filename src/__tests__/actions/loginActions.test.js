import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { submitLoginForm } from "../../redux/actions/loginActions";

import { SUBMIT_LOGIN_FORM } from "../../redux/action-types/loginTypes";

const mockStore = configureStore([thunk]);
let store;
describe("Login actions", () => {
  beforeEach(() => {
    store = mockStore({});
  });

  test("should return SUBMIT_LOGIN_FORM TYPE", () => {
    const res = submitLoginForm();
    expect(res.type).toEqual(SUBMIT_LOGIN_FORM);
  });
});
