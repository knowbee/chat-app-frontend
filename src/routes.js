import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Register from "./components/Register/index";
import Login from "./components/Login/index";
import Chat from "./components/Chat/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Register} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/chat" component={Chat} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
