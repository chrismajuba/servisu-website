import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./navbar.css";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <nav>
      <div className="navbar">
        {/**Container 1 */}
        <Link to="/">
          <img src={assets.weservename} alt="weservelogo" className="logo" />
        </Link>

        {/**Container 2 Adding fonts at 21:00*/}
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

        {/**Container 3 */}
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" className="navbar-search-icon" />
          <div className="navbar-account-container">
            <img
              src={assets.acccount_icon}
              alt=""
              className="navbar-account-icon"
            />
            <div className="dot"></div>
          </div>
          <button className="button">Sign in</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
