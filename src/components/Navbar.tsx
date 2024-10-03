import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/homepage" className="navbar-logo">
          CampusRide
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/create-group" className="nav-link">
            Create
          </Link>
        </li>
        <li>
          <Link to="/join-group" className="nav-link">
            Join
          </Link>
        </li>
        <li>
          <Link to="/events" className="nav-link">
            Events
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
      <div className="burger-menu" onClick={toggleMenu}></div>
    </nav>
  );
}

export default Navbar;
