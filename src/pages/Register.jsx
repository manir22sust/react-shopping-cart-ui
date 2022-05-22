import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <div className="regiter-container">
      <div className="register-wrapper">
        <h1 className="register-title"> CREATE AN ACOUNT</h1>
        <form>
          <input className="firstName" placeholder="First Name" />

          <input className="lastName" placeholder="Last Name" />

          <input className="username" placeholder="username" />

          <input className="email" placeholder="email" />
          <input className="password" placeholder="password" />

          <input className="confirm-password" placeholder=" confirm password" />
          <div className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <button className="create-button">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
