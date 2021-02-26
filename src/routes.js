import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Register from "./components/Register/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Register} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
