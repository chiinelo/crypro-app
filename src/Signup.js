import React from "react";
import mailing from "../src/images/mailing.png";

const Signup = () => {
  return (
    <div>
      <div className="instant">
        <div className="instant-box">
          <p className=" display-6 almost">You're Almost In!</p>
          <p className=" display-6 iretiayo">Welcome Iretiayo</p>
          <img src={mailing} className="" alt="" />
          <br />
          <p className="started-note">
            An activation link has been sent to{" "}
            <a href="mailto:name@email.com">Ireti4tech@gmail.com</a> <br />
            Please click on the link to verify your email and <br /> activate
            your TradExpress account.
          </p>
          <button className="sign-up started-button">Continue</button>
          <p className="already">
            Didn't get an email? Kindly click{" "}
            <a href="mailto:name@email.com">resend email</a> <br />
            Wrong email supplied?{" "}
            <a href="mailto:name@email.com">Edit email address</a>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Signup;
