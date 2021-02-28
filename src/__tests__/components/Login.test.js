import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
import rootReducer from "../../redux/reducers";
import Login from "../../components/Login";

const store = createStore(rootReducer);

test("Login page loads with default state", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
