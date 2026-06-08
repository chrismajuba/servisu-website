import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-grid">
        <div className="hero-copy reveal-up">
          <p className="eyebrow">Trusted local services, one tap away</p>
          <h1>Get access to unlimited service providers with ease!</h1>
          <p>
            Get assistance from a wide range of our devoted and skilled service providers!
          </p>
          <div className="hero-actions">
            <Link to={ROUTES.GET_STARTED} className="btn btn-primary">Get Started</Link>
            <a href="#explore" className="btn btn-soft">Explore Services</a>
          </div>
        </div>
        <div className="hero-card float-card" aria-hidden="true">
          <span>Verified providers</span>
          <strong>Fast requests</strong>
          <small>Cleaner • Gardener • Car Wash • Window Cleaner</small>
        </div>
      </div>
    </header>
  );
};

export default Header;
