import React from "react";
import { Link } from "react-router-dom";

const Getstarted = () => {
  return (
    <div>
      <div className="instant">
        <div className="instant-box">
          <p className=" display-6">Welcome!</p>
          <div>
            <Link className=" btn individual">Individual</Link>
            <Link className=" btn business" to="/business">
              Business
            </Link>
          </div>
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
              placeholder="Full Name"
            />{" "}
            <br />
            <input className="input1" typeof="text" placeholder="Email" />{" "}
            <br />
            <input
              className="input1"
              typeof="text"
              placeholder="Phone Number"
            />{" "}
            <br />
            <input
              className="input1"
              typeof="text"
              placeholder="Referral Code (optional)"
            />
          </form>
          <p className="terms">
            By clicking the Sign Up button below, you agree to <br />
            TradExpress terms and service
          </p>
          <Link className=" btn sign-up click-sign" to="/signup">
            Sign Up
          </Link>
          <p className="already">
            Already have an account ?{" "}
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

export default Getstarted;
