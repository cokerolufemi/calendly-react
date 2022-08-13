import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="container">
      <div class="logo">
        <h1>
          <Link to="/">@Calendly</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/individual">Individual</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/enterprise">Enterprise</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
