import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV == "prod"
      ? "smart-lms-lysdr.onrender.com"
      : "https://smart-lms-pcx0.onrender.com/",
});

export default api;
