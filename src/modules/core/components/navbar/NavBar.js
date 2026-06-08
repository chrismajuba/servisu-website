import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import "./navbar.css";
import { ROUTES } from "../../../../config/routes";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-shell">
        <Link to={ROUTES.HOME} className="brand" onClick={close} aria-label="Go to Servisu home page">
          <span className="brand-mark"><img src={assets.servisULogoDark} alt="Servisu" /></span>
        </Link>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to={ROUTES.HOME} onClick={close}>Home</NavLink>
          <NavLink to={ROUTES.GET_STARTED} onClick={close}>Get Started</NavLink>
          <NavLink to={ROUTES.HELP_CENTER} onClick={close}>Help Center</NavLink>
          <a href="#footer" onClick={close}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
