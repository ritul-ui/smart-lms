
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const backendURL = "https://smart-lms-pcx0.onrender.com";

export default function CourseDetail() {
    const [course, setCourse] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const { id: courseId } = useParams();

    useEffect(() => {
        const fetchCourseById = async () => {
            try {
                const response = await axios.get(backendURL + "/api/courses/" + courseId);
                setCourse(response.data);
            } catch (error) {
                setError("Course not found");
            } finally {
                setIsLoading(false);
            }
        };
        fetchCourseById();
        // eslint-disable-next-line
    }, [courseId]);

    if (isLoading)
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading course details...</p>
            </div>
        );
    if (error)
        return (
            <div className="container py-5 text-center">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg">
                        <div className="row g-0">
                            <div className="col-md-5 d-flex align-items-center justify-content-center bg-light">
                                <img
                                    src={course.image || "https://via.placeholder.com/300x200?text=No+Image"}
                                    alt={course.title}
                                    className="img-fluid rounded m-3"
                                    style={{ maxHeight: "220px", objectFit: "cover" }}
                                />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h2 className="card-title mb-3">{course.title}</h2>
                                    <span className="badge bg-primary mb-2">
                                        {course.category?.name || "No Category"}
                                    </span>
                                    <p className="card-text text-muted mb-2">
                                        {course.description}
                                    </p>
                                    <p className="fw-bold fs-4 mb-2">${course.price}</p>
                                    <p className="mb-2">
                                        <strong>Instructor:</strong> {course.instructor?.name || "Unknown"}
                                    </p>
                                    <div className="d-flex gap-2 mt-4">
                                        <button className="btn btn-outline-secondary flex-fill">Add to cart</button>
                                        <button className="btn btn-primary flex-fill">Buy now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}