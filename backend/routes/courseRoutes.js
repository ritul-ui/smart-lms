import express from 'express';
const router = express.Router();
import { getCourse, getCourseById } from '../controllers/courseController.js';

// course routes
// get all courses
router.get('/', getCourse);
// get details of a course against id
router.get('/:id', getCourseById);

export default router;