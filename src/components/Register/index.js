import React, { useState } from "react";
import { connect } from "react-redux";
import { submitRegister } from "../../redux/actions";
import "./register.scss";
import Layout from "../Layout";
import { useHistory } from "react-router-dom";
import { isEmail } from "validator";

const Register = ({ onSubmit }) => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitButton = (e) => {
    e.preventDefault();

    if (!isEmail(email)) {
      setError("Invalid email");
      return;
    }
    if (name.length < 1) {
      setError("Name is required");
      return;
    }
    if (password.length < 1) {
      setError("Password is required");
      return;
    }

    onSubmit({ name, email, password }).then((res) => {
      if (res.status === 201) {
        history.push("/login");
      } else {
        setError("Try again later");
      }
    });
  };
  return (
    <Layout>
      <div className="registration-form">
        <div className="error">{error}</div>
        <div className="registration-form-header">
          <img src="https://iili.io/fi0ROQ.png" alt="logo-2" />
          <ul>
            <li>Registration</li>
          </ul>
        </div>
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your name"
          ></input>
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
          <button onClick={onSubmitButton} className="registration-button">
            Registration
          </button>
          <button onClick={goToLogin} className="signin-button" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </Layout>
  );
};

export const mapStateToProps = (state) => ({
  name: state.register.name,
  email: state.register.email,
  password: state.register.password,
  errors: state.register.errors,
  submitting: state.register.submitting,
});

export const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: ({ name, email, password }) =>
    dispatch(
      submitRegister({
        name,
        email,
        password,
        props,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
