import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { assets } from "../../../../assets/assets";
import contactInformation from "../utils/Utlis";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleLinkClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/home" onClick={handleLinkClick} className="footer-logo-link">
            <img src={assets.servisULogoWhite} alt="Servisu" className="logo" />
          </Link>
          <p>Servisu is a platform that connects customers with service providers.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.instagram_icon} alt="Instagram" />
            <img src={assets.twitter_icon} alt="Twitter" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><Link to="/home" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/get-started" onClick={handleLinkClick}>Get Started</Link></li>
            <li><Link to="/help-center" onClick={handleLinkClick}>Help Center</Link></li>
            <li><Link to="/privacy-policy/user" onClick={handleLinkClick}>Privacy Policy (Users)</Link></li>
            <li><Link to="/privacy-policy/provider" onClick={handleLinkClick}>Privacy Policy (Providers)</Link></li>
            <li><Link to="/terms-and-conditions" onClick={handleLinkClick}>Terms & Conditions</Link></li>
            <li><Link to="/data-deletion" onClick={handleLinkClick}>Delete my account</Link></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li><a href={`mailto:${contactInformation.email}`}>{contactInformation.email}</a></li>
            <li>{contactInformation.number}</li>
            <li>{contactInformation.address}</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-text">© {currentYear} SERVISU Inc, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
