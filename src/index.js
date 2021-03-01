import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { SocketContext, socket } from "./context/socket";

render(
  <Provider store={store}>
    <SocketContext.Provider value={socket}>
      <App />
    </SocketContext.Provider>
  </Provider>,
  document.getElementById("root")
);
