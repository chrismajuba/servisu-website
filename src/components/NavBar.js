import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">User</Link>
        </li>
        <li>
          <Link to="/">Provider</Link>
        </li>
        <li>
          <Link to="/login">log in</Link>
        </li>
        <li>
          <Link to="/login">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
