import express, { Express } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app: Express = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
// app.use("/students", socketRouter());
// app.use("/users", userSocketRouter());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
