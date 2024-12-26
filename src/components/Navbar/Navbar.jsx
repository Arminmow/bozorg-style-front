import React from 'react';
import './Navbar.css';  // Importing the custom CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">BozorgStyle</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">زنانه</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">مردانه</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">حراج</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
