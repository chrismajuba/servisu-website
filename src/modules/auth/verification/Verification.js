import React from "react";
import "./verification.css";

const Verification = () => {
  return (
    <div className="verification">
      <div className="verification-contents">
        <div className="multi-fields">
          <input type="text" placeholder="Verification Code" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
