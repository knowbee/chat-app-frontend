import React, { useState } from "react";
import "./register.scss";
import Layout from "../Layout";
import { useHistory } from "react-router-dom";
function Register() {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <div className="registration-form">
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
            type="text"
            placeholder="Password"
          ></input>
          <div className="terms-conditions">
            <input type="checkbox"></input>
            <p>
              I accept the <span>terms and conditions</span>
            </p>
          </div>
          <button className="registration-button" type="submit">
            Registration
          </button>
          <button onClick={goToLogin} className="signin-button" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
