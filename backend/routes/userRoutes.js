import express from "express";
const router = express.Router();
import { getUserProfile, updateUserProfile } from "../controllers/userController.js";
import { authProtect } from "../middlewares/authMiddleware.js";


router.get("/", authProtect, getUserProfile);
router.put("/profile", authProtect, updateUserProfile);


export default router;