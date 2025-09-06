import express from "express";
import { getCategory } from "../controllers/categoryController.js";

const router = express.Router();

//category routes
//get all categories
router.get("/", getCategory);

export default router;
