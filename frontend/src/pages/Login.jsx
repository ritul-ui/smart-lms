import { useState } from "react";
// import { useAuth } from "../../store/useAuth";
import illustration from "../assets/login-image.svg";
import { Link } from "react-router-dom";

export default function LoginPage() {
//   const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email: form.email });
    alert("Logged in successfully!");
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Illustration (hidden on small screens) */}
        <div className="col-md-6 d-none d-md-flex bg-light align-items-center justify-content-center">
          <img
            src={illustration}
            alt="LMS Illustration"
            className="img-fluid"
            style={{ maxHeight: "80%" }}
          />
        </div>

        {/* Right Form */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-white">
          <div
            className="card shadow-lg border-0 p-4 w-100"
            style={{ maxWidth: "400px", borderRadius: "15px" }}
          >
            <div className="text-center mb-4">
              <i
                className="bi bi-mortarboard-fill text-primary"
                style={{ fontSize: "3rem" }}
              ></i>
              <h3 className="mt-2 fw-bold">LMS Login</h3>
              <p className="text-muted">Access your courses and dashboard</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>

            <div className="text-center mt-3">
              <p className="mb-0">
                Don’t have an account?{" "}
                {/* <a href="/register" className="text-decoration-none">
                  Sign up
                </a> */}
                <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
