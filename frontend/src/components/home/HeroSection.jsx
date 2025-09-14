import React from 'react'
import { Link } from "react-router-dom";

import illustration from "../../assets/login-image.svg";

function HeroSection() {
  return (
   <>
      <section
        className="py-5 text-white"
        style={{ background: "linear-gradient(135deg, #0d6efd 0%, #198754 100%)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Text */}
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold">
                Welcome to <span className="text-warning">Smart LMS</span>
              </h1>
              <p className="lead mt-3">
                Unlock knowledge anytime, anywhere. Join thousands of learners
                and start your journey today!
              </p>
              <div className="mt-4">
                <Link to="/courses" className="btn btn-light btn-lg me-3">
                  Explore Courses
                </Link>
                <Link to="/login" className="btn btn-outline-light btn-lg">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="col-md-6 text-center">
              <img src={illustration} alt="Learning Illustration" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default HeroSection