import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV == "prod"
      ? "smart-lms-lysdr.onrender.com"
      : "http://localhost:3002",
});

export default api;
