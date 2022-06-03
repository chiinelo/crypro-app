import React from "react";

const Business = () => {
  return (
    <div>
      <div className="instant">
        <div className="instant-box">
          <p className=" display-6">Welcome!</p>
          <div>
            <button className="individual">Individual</button>
            <button className="business">Business</button>
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
              placeholder="Business Name"
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
          <button className="sign-up">Sign Up</button>
          <p className="already">
            Already have an account ?{" "}
            <a className="click-here" href="#">
              Click here
            </a>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Business;
