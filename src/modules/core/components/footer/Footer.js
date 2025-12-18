import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { assets } from "../../../../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.weservename} alt="" className="logo" />
          <p>Servisu is a platform that connects customers with service providers.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/providers">Services</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link to="/data-deletion">Data Deletion</Link></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>011-1111-5555</li>
            <li>servisu-support@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-text">
        © {currentYear} SERVISU Inc, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
