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
        <img src={assets.weservename} alt="weservelogo" className="logo" />

        {/**Container 2 Adding fonts at 21:00*/}
        <ul className="navbar-list">
          <li
            className={currentPage === "home" ? "active" : ""}
            onClick={() => {
              setCurrentPage("home");
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={currentPage === "user" ? "active" : ""}
            onClick={() => {
              setCurrentPage("user");
            }}
          >
            <Link to="/">User</Link>
          </li>
          <li
            className={currentPage === "providers" ? "active" : ""}
            onClick={() => {
              setCurrentPage("providers");
            }}
          >
            <Link to="/providers">Providers</Link>
          </li>
          <li
            className={currentPage === "contactus" ? "active" : ""}
            onClick={() => {
              setCurrentPage("contactus");
            }}
          >
            <Link to="/">Contact Us</Link>
          </li>
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
          <button className="button">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
