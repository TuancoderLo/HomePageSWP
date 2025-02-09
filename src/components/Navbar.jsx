import React from "react";

function Navbar({ onJoinClick, onSignUpClick }) {
  const logoUrl = "https://pdf.ac/2ijddv";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoUrl} alt="BabyHaven Logo" />
          <span>babyhaven</span>
        </div>

        <div className="navbar-menu">
          <div className="navbar-links">
            <a href="#" className="nav-link">
              Getting Pregnant <span className="dropdown-arrow">▼</span>
            </a>
            <a href="#" className="nav-link">
              Pregnancy <span className="dropdown-arrow">▼</span>
            </a>
            <a href="#" className="nav-link">
              Baby <span className="dropdown-arrow">▼</span>
            </a>
            <a href="#" className="nav-link">
              Toddler <span className="dropdown-arrow">▼</span>
            </a>
            <a href="#" className="nav-link">
              Child <span className="dropdown-arrow">▼</span>
            </a>
            <a href="#" className="nav-link">
              Community <span className="dropdown-arrow">▼</span>
            </a>
            <a href="#" className="nav-link">
              Features <span className="dropdown-arrow">▼</span>
            </a>
          </div>

          <div className="navbar-auth">
            <a href="#" className="nav-link join-link" onClick={onJoinClick}>
              Join
            </a>
            <button className="signup-btn" onClick={onSignUpClick}>
              Sign Up 👶
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
