import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../header/header.css";

function Header({ onCommunityClick }) {
  return (
    <header className="p-3 text-bg-dark header">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-3">
            <a href="/" className="logo text-white">
              Camping Bazaar
            </a>
          </div>

          {/* Navigation Section */}
          <div className="col-4">
            <ul className="nav justify-content-center mb-0">
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gears" className="nav-link px-2 text-white">
                  Gears
                </Link>
              </li>
              <li>
                <Link
                  to="/community-forum"
                  className="nav-link px-2 text-white"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Search Bar Section */}
          <div className="col-3">
            <div className="search-bar d-flex align-items-center">
              <FaSearch className="search-icon me-2" size="18px" />
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search items..."
                aria-label="Search"
              />
            </div>
          </div>

          {/* Authentication Buttons */}
          <div className="col-2 text-end">
            <button type="button" className="btn btn-outline-light me-2">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
            </button>
            <button type="button" className="btn btn-warning">
              <Link
                to="/sign-up"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Sign-up
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
