import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../header/header.css';

function Header({ onCommunityClick }) {
  return (
    <header className="p-3 text-bg-dark header">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <a href="/" className="logo">
            Camping Bazaar
          </a>

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
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
              <button
                onClick={onCommunityClick}
                className="nav-link px-2 text-white btn btn-link"
              >
                Community
              </button>
            </li>
            <li>
              <Link to="/about" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>

          <div className="search-bar">
            <FaSearch className="search-icon" size="20px" />
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search items..."
              aria-label="Search"
            />
          </div>

          <div className="auth-buttons text-end">
            <button type="button" className="btn btn-outline-light me-2">
            <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
  Login
</Link>
            </button>
            <button type="button" className="btn btn-warning">
            <Link to="/sign-up" style={{ textDecoration: "none", color: "inherit" }}>
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
