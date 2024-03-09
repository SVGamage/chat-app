import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app: Application = express();
app.use(cors({ origin: "*", credentials: true }));
const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
});
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);

server.listen(3002, () => {
  console.log("server is running on port: 5000");
});
