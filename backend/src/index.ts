import express, { Application } from "express";
import authRoutes from "./routes/authRoutes";

const app: Application = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
