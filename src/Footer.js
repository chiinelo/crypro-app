import React from "react";
import groupsocials from "../src/images/groupsocials.png";

const Footer = () => {
  return (
    <div>
      <div className="footer row p-3 text-center g-5">
        <div className="footer-products col-2">
          <p className="fw-bold">Products</p>

          <p>Bitcoin </p>
          <p>Alt </p>
          <p>Fiat </p>
          <p>Refill </p>
          <p>P2P</p>
        </div>
        <div className="footer-learn col-2">
          <p className="fw-bold">Learn</p>

          <p>Blog </p>
          <p>Help Center</p>
        </div>
        <div className="footer-contact col-2">
          <p className="fw-bold">Contact</p>
          <a href="mailto: hello@tradeexpress.com">hello@tradeexpress.com</a>
          <br />
          <a href="mailto: support@tradeexpress.com">
            support@tradeexpress.com
          </a>
          <br />
          <img src={groupsocials} className="group-socials" alt="socials" />
        </div>
        <div className="footer-company col-2">
          <p className="fw-bold ">Company</p>

          <p>About Us </p>
          <p>Careers </p>
          <p>Rates</p>
          <p> Mobile</p>
        </div>
        <div className="footer-legal col-2 me-0">
          <p className="fw-bold">Legal</p>

          <p>Privacy Policy </p>
          <p>Anti-Money Laundering s</p>
          <p>Terms and Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
