import React, { useState, useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  ShowForLoggedIn,
  LoggedIn,
  NotLoggedIn,
} from "../../modules/ShowForLoggedIn/ShowForLoggedIn";
import UserContext from "../../contexts/UserContext";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useContext(UserContext);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
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

        {/* User Icon Dropdown */}
        <div className="order-2">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle tag="span" className="user-icon">
              <i className="fas fa-user"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <ShowForLoggedIn user={user}>
                <LoggedIn>
                  <DropdownItem tag={Link} to="/dashboard">
                    داشبورد
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/dashboard/cart">
                    سبد خرید
                  </DropdownItem>
                  <DropdownItem>خروج</DropdownItem>
                </LoggedIn>
                <NotLoggedIn>
                  <DropdownItem tag={Link} to="/login">
                    ورود
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/register">
                    ثبت نام
                  </DropdownItem>
                </NotLoggedIn>
              </ShowForLoggedIn>
            </DropdownMenu>
            <Link to="/dashboard" className="user-name">{user?.name}</Link>
          </Dropdown>
        </div>

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
