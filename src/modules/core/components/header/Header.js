import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Get access to unlimited service providers with ease!</h2>
        <p>
          Get assistance from a wide range of our devoted and skilled service
          providers!
        </p>
        {/* <button onClick={() => navigate("/providers")}>
          View Service Providers
        </button> */}
      </div>
    </div>
  );
};

export default Header;
