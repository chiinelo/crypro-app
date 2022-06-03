import React from "react";
import apple from "../src/images/apple.png";
import google from "../src/images/google.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="header ">
        <Navbar />
        <h1 className="body-text">
          Buy, sell and manage your <br></br> Crypto on TradExpress.
        </h1>
        <br></br>
        <p className="body-text1">
          Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP <br></br>
          with NGN.
        </p>
        <br></br>
        <button className="body-button">Get Started</button> <br></br>
        <div className="image-group">
          <img src={apple} className="apple-logo" alt="apple-logo" />
          <img src={google} className="apple-logo" alt="apple-logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
