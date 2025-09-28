import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import paymentRoutes from "./routes/paymentRoutes";
// console.log("port", process.env.PORT);

const app = express();
//connect to db
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes); // goes to authroutes
// app.use("/api/course", courseRoutes); // goes to courseroutes
app.use("/api/category", categoryRoutes);
app.use("/api/courses", courseRoutes); // goes to courseRoute
app.use("/api/payment", paymentRoutes); // payment

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
