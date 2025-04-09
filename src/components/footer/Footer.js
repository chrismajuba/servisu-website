import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.weservename} alt="" className="logo" />
          <p>Some text about the Company</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>011-1111-5555</li>
            <li>we-serve-support@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-text">
        © {currentYear} WE-SERVE Inc, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
