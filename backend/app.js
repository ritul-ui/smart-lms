import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

// console.log("port", process.env.PORT);

const app = express();
//connect to db
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes); // goes to authroutes

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
