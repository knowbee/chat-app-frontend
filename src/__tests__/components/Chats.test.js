import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
import rootReducer from "../../redux/reducers";
import Chat from "../../components/Chat";

const store = createStore(rootReducer);

test("Chat page loads with default state", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Chat />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
