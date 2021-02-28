import React, { useState } from "react";
import "./login.scss";
import { connect } from "react-redux";
import Layout from "../Layout";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../redux/actions";
function Login({ login }) {
  const history = useHistory();

  const goToRegister = () => {
    history.push("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitButton = (e) => {
    e.preventDefault();
    login({ email, password }).then((res) => {
      if (res.status === 200) {
        history.push("/chat");
      }
    });
  };

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
            type="password"
            placeholder="Password"
          ></input>

          <button
            onClick={onSubmitButton}
            className="login-button"
            type="submit"
          >
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
const mapStateToProps = ({ login: { submitting, credentials, error } }) => ({
  submitting,
  credentials,
  error,
});

export const mapDispatchToProps = (dispatch) => ({
  login: ({ email, password }) => dispatch(loginUser({ email, password })),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
