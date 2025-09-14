import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/login-image.svg"; // reuse same illustration or add a new one

function Register() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Illustration */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-light">
          <img
            src={illustration}
            alt="Learning Illustration"
            className="img-fluid p-5"
            style={{ maxHeight: "450px" }}
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <h2 className="fw-bold text-center mb-4">Create an Account</h2>

            <form>
              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create a password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              {/* Terms & Conditions */}
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="terms" required />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the <Link to="/terms">Terms & Conditions</Link>
                </label>
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </form>

            {/* Already have account */}
            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
