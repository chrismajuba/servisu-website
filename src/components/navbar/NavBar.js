import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./navbar.css";
import SigninPopup from "../sign_in/SigninPopup";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isSignIn, setIsSignIn] = useState(false);
  const [signInType, setSignInType] = useState("sign-up");

  return (
    <>
      <nav>
        {isSignIn ? (
          <SigninPopup
            signInType={signInType}
            setSignInType={setSignInType}
            setIsSignIn={setIsSignIn}
          />
        ) : (
          <></>
        )}
        <div className="navbar">
          <Link to="/">
            <img src={assets.weservename} alt="weservelogo" className="logo" />
          </Link>

          <ul className="navbar-list">
            <Link
              to="/"
              className={currentPage === "home" ? "active" : ""}
              onClick={() => {
                setCurrentPage("home");
              }}
            >
              Home
            </Link>
            <a
              href="#quick-start"
              className={currentPage === "quick-start" ? "active" : ""}
              onClick={() => {
                setCurrentPage("quick-start");
              }}
            >
              Quick Start
            </a>
            <a
              href="#mobile-app"
              className={currentPage === "mobile-app" ? "active" : ""}
              onClick={() => {
                setCurrentPage("mobile-app");
              }}
            >
              Mobile App
            </a>
            <a
              href="#footer"
              className={currentPage === "contactus" ? "active" : ""}
              onClick={() => {
                setCurrentPage("contactus");
              }}
            >
              Contact Us
            </a>
          </ul>

          <div className="navbar-right">
            <img
              src={assets.search_icon}
              alt=""
              className="navbar-search-icon"
            />
            <div className="navbar-account-container">
              <Link to="/user-account">
                <img
                  src={assets.acccount_icon}
                  alt=""
                  className="navbar-account-icon"
                />
              </Link>
              <div className="dot"></div>
            </div>
            <button
              onClick={() => {
                if (isSignIn) {
                  setIsSignIn(false);
                } else {
                  setIsSignIn(true);
                  setSignInType("sign-in");
                }
              }}
              className="button"
            >
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
