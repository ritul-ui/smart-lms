import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const categories = [
  "All Categories",
  "Business",
  "Data Science",
  "Design",
  "Marketing",
  "Mobile Development",
  "Web Development",
];

const courses = [
  {
    id: 1,
    title: "Complete Web Development",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more...",
    price: 99.99,
    rating: 0,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Learn Python, NumPy, Pandas, Matplotlib, Seaborn and more...",
    price: 89.99,
    rating: 0,
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "React Masterclass 2023",
    description: "Become an expert in React.js and build scalable front-end apps.",
    price: 79.99,
    rating: 0,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1670057037226-b3d65909424f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Design Basics",
    description: "Introduction to UI/UX, wireframing, and visual design.",
    price: 59.99,
    rating: 0,
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Learn React Native and Flutter to build cross-platform apps.",
    price: 109.99,
    rating: 0,
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60",
  },
];

export default function CoursePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Popularity");

  const navigate= useNavigate();

  const filteredCourses = courses
    .filter((c) =>
      selectedCategory === "All Categories" ? true : c.category === selectedCategory
    )
    .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()));

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
              {filteredCourses.map((course) => (
                <div key={course.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={course.image}
                      className="card-img-top"
                      alt={course.title}
                      style={{ height: "160px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <span className="badge bg-primary">{course.category}</span>
                      <h5 className="card-title mt-2">
                        {course.title.length > 25
                          ? course.title.substring(0, 25) + "..."
                          : course.title}
                      </h5>
                      <p className="card-text text-muted">
                        {course.description}
                      </p>
                      <p className="fw-bold">${course.price.toFixed(2)}</p>
                      <button className="btn btn-outline-primary w-100"
                        onClick={() => navigate(`/course/${course.id}`)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
