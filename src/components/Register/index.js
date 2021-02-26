import React from "react";
import "./register.scss";
import Layout from "../Layout";

function Register() {
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
          <input type="text" placeholder="Your name"></input>
          <input type="text" placeholder="E-mail"></input>
          <input type="text" placeholder="Password"></input>
          <div className="terms-conditions">
            <input type="checkbox"></input>
            <p>
              I accept the <span>terms and conditions</span>
            </p>
          </div>
          <button className="registration-button" type="submit">
            Registration
          </button>
          <button className="signin-button" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
