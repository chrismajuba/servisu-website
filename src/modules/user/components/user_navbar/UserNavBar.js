import React from "react";
import "./userNav.css";

const UserNav = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="user-nav">
      <ul className="nav-list">
        <li>
          <button
            className={currentPage === "Account" ? "current" : ""}
            onClick={() => {
              setCurrentPage("Account");
            }}
          >
            Account
          </button>
        </li>
        <li>
          <button
            className={currentPage === "Requests" ? "current" : ""}
            onClick={() => {
              setCurrentPage("Requests");
            }}
          >
            Requests
          </button>
        </li>
        <li>
          <button
            className={currentPage === "Security" ? "current" : ""}
            onClick={() => {
              setCurrentPage("Security");
            }}
          >
            Security
          </button>
        </li>
        <li>
          <button
            className={currentPage === "Support" ? "current" : ""}
            onClick={() => {
              setCurrentPage("Support");
            }}
          >
            Support
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
