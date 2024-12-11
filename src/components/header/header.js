import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // For the search icon
import { Link } from "react-router-dom";
import "./header.css"; // Header styling

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUser(loggedInUser);
    }
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser({});
    closeDropdown();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
    // Add logic to handle search functionality here
  };

  return (
    <header className="header">
      <div className="container d-flex">
        {/* Logo Section */}
        <Link to="/" className="logo">
          Camping Bazaar
        </Link>

        {/* Navigation Links */}
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/gears" className="nav-link">
            Gears
          </Link>
          <Link to="/community-forum" className="nav-link">
            Community
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </nav>

        {/* Search Section */}
        <form onSubmit={handleSearchSubmit} className="search-bar1">
          <FaSearch className="search-icon1" />
          <input
            type="text"
            className="form-control1-dark"
            placeholder="Search for items..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>

        {/* User Profile Section */}
        <div className="profile-section">
          {isLoggedIn ? (
            <div className="profile-info">
              <img
                src={user.avatarUrl || "default-avatar.png"}
                alt="Profile"
                className="profile-avatar"
                onClick={toggleDropdown}
              />
              <span className="username">{user.username}</span>

              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/profile" className="dropdown-item">
                    View Profile
                  </Link>
                  <Link
                    to="/profile/edit"
                    className="dropdown-item"
                    onClick={closeDropdown}
                  >
                    Settings
                  </Link>
                  <button
                    className="dropdown-item logout-btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-outline-light">
                Login
              </Link>
              <Link to="/sign-up" className="btn btn-warning">
                Sign-up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
