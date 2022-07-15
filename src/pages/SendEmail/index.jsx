import React from "react";

import logo from "../../assets/logos/logo_yard_sale.svg";
import email from "../../assets/icons/email.svg";

import "./SendEmail.scss";

const SendEmail = () => {
  return (
    <div className="sendEmail">
      <div className="form-container">
        <img src={ logo } alt="logo" className="sendEmail-Logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={email} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export { SendEmail };
