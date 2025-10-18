import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const backendURL = "https://smart-lms-pcx0.onrender.com/";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // call the get courses api
  useEffect(() => {
    // fetch the data using axios
    const fetchCourses = async () => {
      try {
        const response = await axios.get(backendURL + "/api/courses");
        // save into state
        setCourses(response.data);
      } catch (error) {
        console.error("Error in fetching course", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourses();
  }, []);

	if (isLoading) return <p>Loading Courses...</p>

  return (
    <>
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Featured Courses</h2>
          <p className="text-muted text-center mb-5">
            Handpicked courses to help you get started with Smart LMS.
          </p>
          <div className="row g-4">
            {/* Course Card 1 */}
            {/* map over the courses array and udpate card values dynamically */}
            {courses.map((course) => (
              <div className="col-md-4" key={course._id}>
                <Link
                  to={`/courses/${course._id}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 shadow-lg border-0 position-relative">
                    {/* Category Badge */}
                    <span className="badge bg-primary position-absolute top-0 end-0 m-2">
                      {course.category.name}
                    </span>

                    <img
                      src={course.image || "https://via.placeholder.com/300x160?text=No+Image"}
                      className="card-img-top"
                      alt="Course"
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{course.title}</h5>
                      <p className="card-text text-muted">
                        {course.description}
                      </p>
                      {/* Bottom Section */}
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          {/* Price */}
                          <span className="fw-bold text-primary">
                            Rs. {course.price}
                          </span>
                          {/* Ratings */}
                          <div className="text-warning">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                            <span className="text-muted ms-1">(4.5)</span>
                          </div>
                          <div className="d-flex justify-content-end">
                            {/* Instructor */}
                            <small className="text-muted">
                              {course.instructor.name}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="text-center mt-5">
            <Link to="/courses" className="btn btn-primary btn-lg">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedCourses;