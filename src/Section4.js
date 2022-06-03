import React from "react";
import union from "../src/images/union.png";
import quotation from "../src/images/quotation.png";

const Section4 = () => {
  return (
    <div>
      <div className="section-4">
        <p className="section4-title fw-bold fs-2 text-center p-4">
          Customer's Review
        </p>
        <div className="row text-center  box ms-4">
          <div className="purple-background col-md-4 ">
            <img src={quotation} className="quote" alt="quote-img" />

            <img src={union} className="image-overlay" width="100%" />
            <p>
              Trading on TradExpress mobile & web <br />
              platforms has been a smooth experience for me quite easy to
              navigate.
            </p>
          </div>
          <div className="purple-background col-md-4 ">
            <img src={quotation} className="quote" alt="quote-img" />
            <img src={union} className="image-overlay" width="100%"></img>
            <p>
              They have the best rate compared to other platforms with fast
              payout.
            </p>
          </div>
          <div className="purple-background col-md-4 ">
            <img src={quotation} className="quote" alt="quote-img" />
            <img src={union} className="image-overlay" width="100%"></img>
            <p>
              Easy to fund and withdraw coins or cash on their platform, I will
              definitely trade with them again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
