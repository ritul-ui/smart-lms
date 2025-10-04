import express from "express";
const router = express.Router();
import {
  getCourse,
  getCourseById,
  enrollStudentInCourse,
  myCourses,
} from "../controllers/courseController.js";
import { authProtect } from "../middlewares/authMiddleware.js";

// course routes
// get all courses
router.get("/my-courses", authProtect, myCourses);
router.get("/", getCourse);
// get details of a course against id
router.get("/:id", getCourseById);

//enrol user
router.post("/:id/enroll", authProtect, enrollStudentInCourse);

export default router;
