import { Link, NavLink } from "react-router-dom";
import {useAuth} from '../../context/AuthContext';

export default function Navbar() {
  const {user, logout} = useAuth();
  // console.log("user", user.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Smart LMS
        </Link>

        {/* Toggler (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">
                Courses
              </NavLink>
            </li>
            {/* conditional rendering for user login/logout */}
            {user ? (
              <li className="nav-item">
                <span>Hi {user.user.name}</span>
                <NavLink className="btn btn-primary ms-lg-3" onClick={logout} to="/">
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="btn btn-primary ms-lg-3" to="/login">
                  Login
                </NavLink>
              </li>
            )}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}