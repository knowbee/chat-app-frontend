import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { submitForm } from "../../redux/actions/registerActions";

import { REGISTER_FORM_SUBMIT } from "../../redux/action-types/registerUserTypes";

const mockStore = configureStore([thunk]);
let store;
describe("Register actions", () => {
  beforeEach(() => {
    store = mockStore({});
  });

  test("should return REGISTER_FORM_SUBMIT TYPE", () => {
    const res = submitForm();
    expect(res.type).toEqual(REGISTER_FORM_SUBMIT);
  });
});
