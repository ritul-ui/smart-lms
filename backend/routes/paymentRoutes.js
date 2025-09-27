import express from "express";
const router = express.Router();
import authProtect from "../middlewares/authMiddleware.js";
import { createPaymentIntent } from "../controllers/paymentController.js";

//payment intent routes
router.post("/create-payment-intent", authProtect, createPaymentIntent);

export default router;
