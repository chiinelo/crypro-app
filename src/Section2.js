import React from "react";
import group from "../src/images/group.png";
import "./Section2.css";

const Section2 = () => {
  return (
    <div>
      <div className="cards row gap-5 ms-5">
        <div className="card1 col-md-3">
          <img src={group} className="card" alt="card" width="100px" />
          <p className="title">Easy Mode of Payment</p>
          <p className="card-body">
            People can now easily send and receive money from anywhere in the
            world to purchase goods and pay for services.
          </p>
        </div>
        <div className="card2 col-md-3">
          <img src={group} className="card" alt="card" width="100px" />
          <p className="title">Financial Freedom</p>
          <p className="card-body">
            Just like the internet no single entity controls the Crypto network
            which provides users transparency and privacy, which puts you in
            absolute control of your money.
          </p>
        </div>
        <div className="card3 col-md-3">
          <img src={group} className="card" alt="card" width="100px" />
          <p className="title">Investment</p>
          <p className="card-body">
            The constant demand as made Cryptocurrecies a Digital Gold used for
            alternative store of wealth on long term investments.
          </p>
        </div>
      </div>
      <button className="learnMore">Learn More</button>
      {/* end of cards  */}
    </div>
  );
};

export default Section2;
