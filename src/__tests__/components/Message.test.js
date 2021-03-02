import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
import rootReducer from "../../redux/reducers";
import Message from "../../components/Message";

const store = createStore(rootReducer);

test("Message component loads with default state", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Message />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
