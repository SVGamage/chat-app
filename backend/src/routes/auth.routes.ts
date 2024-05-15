import { Router, type Request, type Response } from "express";

const authRoutes = Router();

authRoutes.get("/login", (req: Request, res: Response) => {
  res.send("Login route");
});

authRoutes.get("/register", (req: Request, res: Response) => {
  res.send("Register route");
});

export default authRoutes;
