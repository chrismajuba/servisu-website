import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="/images/weservelogo.jpg" alt="we-serve" />
      <h3 className="app-subtitle">
        Need help with your extra chores? Request for help now!
      </h3>
    </div>
  );
};

export default Header;
