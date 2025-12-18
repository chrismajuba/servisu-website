import React from "react";
import "./providerNav.css";

const ProviderNavBar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="provider-nav">
      <ul className="nav-list">
        <li>
          <button
            className={currentPage === "Dashboard" ? "current" : ""}
            onClick={() => {
              setCurrentPage("Dashboard");
            }}
          >
            Dashboard
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
            className={currentPage === "Profile" ? "current" : ""}
            onClick={() => {
              setCurrentPage("Profile");
            }}
          >
            Profile
          </button>
        </li>
        <li>
          <button
            className={currentPage === "Availability" ? "current" : ""}
            onClick={() => {
              setCurrentPage("Availability");
            }}
          >
            Availability
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

export default ProviderNavBar;

