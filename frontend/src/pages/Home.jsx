import React from "react";
import { Link } from "react-router-dom";

import HeroSection from "../components/home/HeroSection";
import FeaturedCourses from "../components/home/FeaturedCourses";

function Home() {
  // Example categories data
  const categories = [
    { name: "Programming", slug: "programming", icon: "bi bi-code-slash", color: "text-primary", count: 24 },
    { name: "Business", slug: "business", icon: "bi bi-bar-chart-line", color: "text-success", count: 18 },
    { name: "Design", slug: "design", icon: "bi bi-brush", color: "text-warning", count: 15 },
    { name: "Health", slug: "health", icon: "bi bi-heart-pulse", color: "text-danger", count: 12 },
  ];

  // Example featured courses data
 const featuredCourses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    instructor: "John Doe",
    image:
      "https://images.unsplash.com/photo-1707758967860-19106a5e9ab7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVsbCUyMHN0YWNrfGVufDB8fDB8fHww",
    slug: "full-stack-web-development",
    price: 129,
    rating: 4.7,
    category: "Programming",
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    instructor: "Jane Smith",
    image:
      "https://plus.unsplash.com/premium_photo-1681841957049-37fed0a9ba55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGlnaXRhbCUyME1hcmtldGluZyUyME1hc3Rlcnl8ZW58MHx8MHx8fDA%3D",
    slug: "digital-marketing-mastery",
    price: 99,
    rating: 4.5,
    category: "Business",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    instructor: "Emily Johnson",
    image:
      "https://plus.unsplash.com/premium_photo-1661412854378-2f705217e8a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWklMjB1eCUyMHByaW5jaXBsZXN8ZW58MHx8MHx8fDA%3D",
    slug: "ui-ux-design-principles",
    price: 109,
    rating: 4.6,
    category: "Design",
  },
];


  return (
    <div>
      
         <HeroSection />
      {/* Browse Categories Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Browse Categories</h2>
          <div className="row g-4">
            {categories.map((cat, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <Link to={`/courses/${cat.slug}`} className="text-decoration-none text-dark">
                  <div className="card h-100 shadow-sm border-0 text-center p-4">
                    <i className={`${cat.icon} fs-1 ${cat.color} mb-3`}></i>
                    <h5 className="fw-bold">{cat.name}</h5>
                    <p className="text-muted mb-1">{cat.count} Courses Available</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

              {/* Featured Courses Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Featured Courses</h2>
          <div className="row g-4">
            {featuredCourses.map((course) => (
              <div key={course.id} className="col-md-4">
                <Link
                  to={`/courses/${course.slug}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 shadow-lg border-0 position-relative hover-shadow">
                    {/* Course Category Badge */}
                    <span
                      className="badge bg-primary position-absolute top-0 end-0 m-3"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {course.category}
                    </span>

                    {/* Image */}
                    <img
                      src={course.image}
                      className="card-img-top"
                      alt={course.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />

                    {/* Card Body */}
                    <div className="card-body d-flex flex-column">
                      <h5 className="fw-bold mb-2">{course.title}</h5>

                      {/* Price always visible */}
                      <p className="fw-bold text-success fs-5 mb-3">
                        ${course.price}
                      </p>

                      {/* Bottom Info */}
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        {/* Rating */}
                        <span className="text-warning fw-bold">
                          <i className="bi bi-star-fill"></i> {course.rating}
                        </span>
                        {/* Instructor */}
                        <span className="text-muted small">
                          {course.instructor}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* View All Courses Button */}
          <div className="text-center mt-5">
            <Link to="/courses" className="btn btn-outline-primary btn-lg">
              View All Courses
            </Link>
          </div>
        </div>
      </section>




      {/* Features Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Smart LMS?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 shadow rounded h-100">
                <i className="bi bi-laptop fs-1 text-primary mb-3"></i>
                <h5 className="fw-bold">Learn Anywhere</h5>
                <p className="text-muted">Access courses on any device, anytime, anywhere.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow rounded h-100">
                <i className="bi bi-people fs-1 text-success mb-3"></i>
                <h5 className="fw-bold">Expert Mentors</h5>
                <p className="text-muted">Learn from top instructors and industry professionals.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow rounded h-100">
                <i className="bi bi-award fs-1 text-warning mb-3"></i>
                <h5 className="fw-bold">Certified Courses</h5>
                <p className="text-muted">Get recognized certifications to boost your career.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* CTA Section */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(210deg, #198754 0%, #0d6efd 100%)",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-3">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="lead mb-4">
            Join thousands of students who are already upgrading their skills
            with <span className="fw-bold">Smart LMS</span>.
          </p>
          <div>
            <Link to="/signup" className="btn btn-light btn-lg me-3">
              Get Started Free
            </Link>
            
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
