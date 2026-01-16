import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import "./navbar.css";
import { APIContext } from "../../../context/ContextProvider";
import { ROUTES } from "../../../../config/routes";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const {isLoading} = useContext(APIContext);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div>
            <Link to="/">
              <img
                src={assets.weservename}
                alt="servisu"
                className="logo"
              />
            </Link>
          </div>
          <ul className="navbar-list">
            <Link
              to={ROUTES.HOME}
              className={currentPage === "home" ? "active" : ""}
              onClick={() => {
                setCurrentPage("home");
              }}>
              Home
            </Link>
            <Link
              to={ROUTES.GET_STARTED}
              className={currentPage === "get-started" ? "active" : ""}
              onClick={() => {
                setCurrentPage("get-started");
              }}>
              Get Started
            </Link>
            <a
              href="#footer"
              className={currentPage === "contactus" ? "active" : ""}
              onClick={() => {
                setCurrentPage("contactus");
              }}>
              Contact Us
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
