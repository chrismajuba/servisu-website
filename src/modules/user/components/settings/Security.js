import "./security.css";
import React from "react";

const SecuritySettings = ({ loginDetails }) => {
  if (loginDetails === null) {
    return (
      <div>
        <p>Unavailable</p>
      </div>
    );
  }

  return (
    <div className="security-details">
      <div className="security-details-content">
        <div className="settings-container">
          <h2>Password</h2>
          <div className="row">
            <p>Change your password</p>
            <button>Edit</button>
          </div>
          <hr />
        </div>
        <div className="settings-container">
          <h2>Two-Step Verification</h2>
          <div className="row">
            <p>Enable Two-Step Verification for more security</p>
            <button>Enable</button>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
