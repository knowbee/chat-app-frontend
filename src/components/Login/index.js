import React, { useState } from "react";
import "./login.scss";
import Layout from "../Layout";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const goToRegister = () => {
    history.push("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <div className="login-form">
        <div className="login-form-header">
          <img src="https://iili.io/fi0ROQ.png" alt="logo-2" />
          <ul>
            <li>Login</li>
          </ul>
        </div>
        <form>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail"
          ></input>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          ></input>

          <button className="login-button" type="submit">
            Login
          </button>
          <button
            onClick={goToRegister}
            className="register-button"
            type="submit"
          >
            Create account
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
