import React from "react";

function Header({
  onJoinClick,
  onSignUpClick,
  onLogoClick,
  onLogout,
  isAuthenticated,
}) {
  const logoUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWoGKcB9SMvUmAFc9v3yH6f_wt5iZrJM8Lpg&s";

  const menuItems = [
    "Getting Pregnant",
    "Pregnancy",
    "Baby",
    "Toddler",
    "Child",
    "Community",
    "Features",
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo" onClick={onLogoClick} role="button">
          <img src={logoUrl} alt="BabyHaven" />
          <span>babyhaven</span>
        </div>

        <div className="header-menu">
          <div className="header-links">
            {menuItems.map((item) => (
              <a key={item} href="#" className="header-link">
                {item}
                <span className="dropdown-arrow">▼</span>
              </a>
            ))}
          </div>

          <div className="header-auth">
            {!isAuthenticated ? (
              <>
                <a
                  href="#"
                  className="header-link join-link"
                  onClick={onJoinClick}
                >
                  Join
                </a>
                <button className="signup-btn" onClick={onSignUpClick}>
                  Sign Up 👶
                </button>
              </>
            ) : (
              <button className="logout-btn" onClick={onLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
