import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <div className="col-md-3 text-center text-md-start mb-4 mb-md-0">
            <h5 className="fw-bold">
              <i className="bi bi-mortarboard-fill text-primary me-2"></i>
              LMS
            </h5>
            <p className="small mb-0">
              Empowering students and teachers through learning.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/courses" className="text-light text-decoration-none">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-light text-decoration-none">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>
              info@lms.com
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>
              +91 123 456 7890
            </p>
            <p className="mb-0">
              <i className="bi bi-geo-alt-fill me-2"></i>
              123 Learning St, City, Country
            </p>
          </div>

          {/* Social Icons */}
          <div className="col-md-3 text-center text-md-end">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-5 me-3"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-5 me-3"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-5"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-secondary" />

        {/* Copyright */}
        <div className="text-center">
          <p className="small mb-0">
            © {new Date().getFullYear()} LMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
