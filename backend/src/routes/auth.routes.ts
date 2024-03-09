import express from "express";
import { signUp } from "../controllers/auth.controller";

const router = express.Router();

router.post("/signUp", signUp);

export default router;
