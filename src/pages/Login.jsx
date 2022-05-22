import React from "react";
// import { Link } from " react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title"> SIGN IN</h1>
        <form>
          <input className="username" placeholder="uesrname" />
          <input className="password" placeholder="password" />
          <button className="login-button">LOGIN</button>
          <a> DO NOT REMEMBER PASSWORD ?</a>
          <a>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
