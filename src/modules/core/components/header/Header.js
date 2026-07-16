import React from "react";
import { motion } from "../../../../lib/motionStub";
import "./header.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../config/routes";

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <motion.div className="hero-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55 }}>
        <motion.div className="hero-copy reveal-up" initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <p className="eyebrow">Trusted local services, one tap away</p>
          <h1>Get access to unlimited service providers with ease!</h1>
          <p>
            Get assistance from a wide range of our devoted and skilled service providers!
          </p>
          <div className="hero-actions">
            <Link to={ROUTES.GET_STARTED} className="btn btn-primary">Get Started</Link>
            <a href="#explore" className="btn btn-soft">Explore Services</a>
          </div>
        </motion.div>
        <motion.div className="hero-card float-card" aria-hidden="true" initial={{ opacity: 0, y: 26, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }} whileHover={{ y: -8, scale: 1.03 }}>
          <span>Verified providers</span>
          <strong>Fast requests</strong>
          <small>Cleaner • Gardener • Car Wash • Window Cleaner</small>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
