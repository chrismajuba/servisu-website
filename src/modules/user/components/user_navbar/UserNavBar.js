import React, { useState } from "react";
import "./userNav.css";

const UserNav = ({ setCurrentPage }) => {
  const [selected, setSelected] = useState("");

  return (
    <nav className="user-nav">
      <ul className="nav-list">
        <li>
          <button
            className={selected === "account" ? "current" : ""}
            onClick={() => {
              setCurrentPage("Account");
              setSelected("account");
            }}
          >
            Account
          </button>
        </li>
        <li>
          <button
            className={selected === "requests" ? "current" : ""}
            onClick={() => {
              setCurrentPage("Requests");
              setSelected("requests");
            }}
          >
            Requests
          </button>
        </li>
        <li>
          <button
            className={selected === "security" ? "current" : ""}
            onClick={() => {
              setCurrentPage("Security");
              setSelected("security");
            }}
          >
            Security
          </button>
        </li>
        <li>
          <button
            className={selected === "support" ? "current" : ""}
            onClick={() => {
              setCurrentPage("Support");
              setSelected("support");
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
