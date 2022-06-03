import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="instant">
        <div className="instant-box">
          <p className=" display-6">Welcome!</p>

          <form className="instant-form">
            <input
              className="input1 username"
              typeof="text"
              placeholder="Username"
            />{" "}
            <br />
            <input
              className="input1"
              typeof="text"
              placeholder="Business Name"
            />{" "}
            <br />
          </form>
          <div className="login">
            <input type="radio"></input>
            <p className="terms">
              Remember password
              <Link to="#">Forgot Password?</Link>
            </p>
          </div>
          <button className="sign-up">Sign Up</button>
          <p className="already">
            New User ?{" "}
            <Link className="click-here" to="#">
              Click here
            </Link>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
