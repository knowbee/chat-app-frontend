import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Register from "./components/Register/index";
import Login from "./components/Login/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Register} />
      <Route path="/login" exact={true} component={Login} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
