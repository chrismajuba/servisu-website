import React from "react";
import "./userNav.css";

const UserNav = ({ setCurrentPage }) => {
  return (
    <nav className="user-nav">
      <ul className="nav-list">
        <li>
          <button onClick={() => setCurrentPage("Account")}>Account</button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("Requests")}>Requests</button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("Security")}>Security</button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("Support")}>Support</button>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
