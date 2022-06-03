import React from "react";
import apple from "../src/images/apple.png";
import google from "../src/images/google.png";

const Section3 = () => {
  return (
    <div>
      <div className="section-3">
        <p className="section3-text">
          Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?
        </p>
        <p className="fw-bold section3-text1">
          Create your account for free and start trading today!
        </p>
        <button>Get Started</button> <br />
        <img src={apple} className="apple-logo1" alt="apple-logo" />
        <img src={google} className="apple-logo1" alt="apple-logo" />
      </div>
    </div>
  );
};

export default Section3;
