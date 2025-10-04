import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const categories = [
  "Web Dev",
  "DSA PYTHON",
  "AI",
  "Design",
];

// Remove static courses, use API data
export default function CoursePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Popularity");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCourses() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("http://localhost:3002/api/courses/");
        if (!res.ok) throw new Error("Failed to fetch courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  const filteredCourses = courses
    .filter((c) =>
      selectedCategory === "All Categories" ? true : c.category?.name === selectedCategory
    )
    .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()));

  // Sorting
  const sortedCourses = React.useMemo(() => {
    const arr = [...filteredCourses];
    if (sortBy === "Price: Low to High") {
      arr.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === "Price: High to Low") {
      arr.sort((a, b) => (b.price || 0) - (a.price || 0));
    }
    return arr;
  }, [filteredCourses, sortBy]);

  return (
    <div>
     
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="mb-3">Search</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search courses..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="btn btn-primary">Search</button>
                </div>

                <h5 className="mb-3">Categories</h5>
                <ul className="list-group">
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      className={`list-group-item list-group-item-action ${
                        selectedCategory === cat ? "active" : ""
                      }`}
                      onClick={() => setSelectedCategory(cat)}
                      style={{ cursor: "pointer" }}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 text-muted">
                Showing {filteredCourses.length} courses
              </p>
              <select
                className="form-select w-auto"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="row">
              {loading ? (
                <div className="text-center py-5">Loading courses...</div>
              ) : error ? (
                <div className="text-danger py-5">{error}</div>
              ) : sortedCourses.length === 0 ? (
                <div className="text-center py-5">No courses found.</div>
              ) : (
                sortedCourses.map((course) => (
                  <div key={course._id} className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 shadow-sm">
                      <img
                        src={course.image || "https://via.placeholder.com/300x160?text=No+Image"}
                        className="card-img-top"
                        alt={course.title}
                        style={{ height: "160px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <span className="badge bg-primary">{course.category?.name || "No Category"}</span>
                        <h5 className="card-title mt-2">
                          {course.title.length > 25
                            ? course.title.substring(0, 25) + "..."
                            : course.title}
                        </h5>
                        <p className="card-text text-muted">
                          {course.description}
                        </p>
                        <p className="fw-bold">${course.price?.toFixed(2)}</p>
                        <button className="btn btn-outline-primary w-100"
                          onClick={() => navigate(`/courses/${course._id}`)}>
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
