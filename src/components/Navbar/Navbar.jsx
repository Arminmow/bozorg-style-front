import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Hamburger Menu (Mobile) */}
        <button
          className="navbar-toggler order-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <Link className="navbar-brand order-1" to="/">
          بزرگ استایل
        </Link>

        {/* User Icon */}
        <Link className="order-2 user-icon" to="/login">
          <i className="fas fa-user"></i>
        </Link>

        {/* Navbar Links (Desktop) */}
        <div className="collapse navbar-collapse order-3" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                خانه
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                درباره ما
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
