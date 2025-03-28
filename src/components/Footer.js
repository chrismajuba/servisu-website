import React from "react";
import "../styles.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} WE-SERVE Inc, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
