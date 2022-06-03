import React from "react";
import group from "../src/images/group.png";
import groupother from "../src/images/groupother.png";

const Section2A = () => {
  return (
    <div>
      <div className=" width='100%">
        <p className="sell-steps">
          Buy and Sell your Cryptocurrency in 3 simple steps
        </p>
        <div className="section2-text row">
          <div className="account row">
            <div className="text-1 col-6 ">
              <p className="numbers">1</p>
              <p className="fw-bold">Create a free Account</p>
              <p>
                Sign up for your free TradExpress Wallet on web, iOS, or Android
                devices and follow our easy process to set up your profile.
              </p>
            </div>
            <div className="image1 col-6">
              <img src={groupother} alt="group-image" />
            </div>
          </div>
          <div className="deposit row">
            <div className="image-2 col-6">
              <img src={group} alt="group-image" />
            </div>
            <div className="text-2 col-6">
              <p className="numbers">2</p>
              <p className="fw-bold">Deposit</p>
              <p>
                Choose your preferred deposit option like bank transfer,
                credit/debit card or send digital asset directly to your wallet
                for easy funding/withdrawal.
              </p>
            </div>
          </div>
          <div className="buy row">
            <div className="text-3 col-6">
              <p className="numbers">3</p>
              <p className="fw-bold">Buy/ Sell Crypto</p>
              <p>
                Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your
                wallet or send it easily to friends and family.
              </p>
            </div>
            <div className="image-3 col-6">
              <img src={groupother} alt="group-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2A;
