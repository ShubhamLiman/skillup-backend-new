import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import adminRouter from "./features/admin/Routers/adminRoutes.js";
import clientRouter from "./features/client/routes/clientRoutes.js";
import { connectDB } from "./config/mongoDb.js";
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());
app.use("/skillup/api/admin", adminRouter);
app.use("/skillup/api/client", clientRouter);
app.get("/", (req, res) => {
  res.json("Hello World!");
});

connectDB().then(() => {
  try {
    app.listen(5000, () => {
      console.log(`Server is running on http://localhost:5000`);
    });
  } catch (error) {
    console.log(error, "database error");
  }
});

export default app;
