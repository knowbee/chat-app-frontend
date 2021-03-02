import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
import rootReducer from "../../redux/reducers";
import ConversationsList from "../../components/ConversationsList";

const store = createStore(rootReducer);

test("ConversationsList component loads with default state", () => {
  const chats = [];
  const component = renderer.create(
    <Provider store={store}>
      <ConversationsList chats={chats} />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
