import React from "react";
import { Link } from "react-router-dom";
import TradeExpress from "../src/images/TradExpress.png";

const Navbar = () => {
  return (
    <div className="navig-bkg">
      <div className="navbar-header">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <Link className="navbar-brand nav-heading fw-bold" to="/">
              <img src={TradeExpress} className="express-logo" alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="nav-elements">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link
                    to="/buy"
                    className="nav-link active btn btn-lg text-light"
                    aria-current="page"
                  >
                    Instant Buy/Sell
                  </Link>
                  <Link to="#" className="nav-link btn btn-lg text-light">
                    Learn
                  </Link>
                  <Link
                    to="/login"
                    className=" btn nav-link text-light border border-white box-button"
                  >
                    Login
                  </Link>
                  <Link
                    to="/getstarted"
                    className=" btn nav-link text-light border border-white box-button"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand nav-heading fw-bold" to="/">
            <img src={TradeExpress} className="express-logo" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link navbutton-rest instant-button"
                  aria-current="page"
                  to="/buy"
                >
                  Instant Buy/Sell
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbutton-rest learn-button" to="#">
                  Learn
                </Link>
              </li>
              <Link className="btn bg-opacity login-button" to="/login">
                
              </Link>
              <Link className="btn started-button" to="/getstarted">
                Get Started
              </Link>
            </ul>
          </div>
        </div>
      </nav> */
}
