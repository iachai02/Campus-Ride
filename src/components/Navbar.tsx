import React, { ReactNode, ReactElement } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          CampusRide
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">
            Events
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
