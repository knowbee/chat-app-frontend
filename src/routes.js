import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Register from "./components/Register/index";
import Login from "./components/Login/index";
import Chat from "./components/Chat/index";
import { connect } from "react-redux";
const Routes = ({ isLoggedIn }) => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact={true}
        render={(props) =>
          !isLoggedIn ? <Register {...props} /> : <Redirect to="/chat" />
        }
      />
      <Route
        path="/login"
        exact={true}
        render={(props) =>
          !isLoggedIn ? <Login {...props} /> : <Redirect to="/chat" />
        }
      />
      <Route
        exact={true}
        path="/chat"
        render={(props) =>
          isLoggedIn ? <Chat {...props} /> : <Redirect to="/login" />
        }
      />
      <Route
        path="/*"
        exact={true}
        render={(props) =>
          !isLoggedIn ? <Login {...props} /> : <Redirect to="/chat" />
        }
      />
    </Switch>
  </BrowserRouter>
);

export const mapStateToProps = ({ currentUser: { isLoggedIn } }) => ({
  isLoggedIn,
});
export default connect(mapStateToProps)(Routes);
