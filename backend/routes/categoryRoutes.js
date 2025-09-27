import express from 'express';
const router = express.Router();
import { getCategory } from '../controllers/categoryController.js';

// course routes
// get all categories
router.get('/', getCategory);

export default router;