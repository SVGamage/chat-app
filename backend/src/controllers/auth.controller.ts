import { Request, Response } from "express";
import { signUpService } from "../services/auth.service";
import { User } from "../models/user.model";

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUserData = req.body;

    const createdUser: User | undefined = await signUpService(newUserData);
    console.log(createdUser);
    res.status(201).json({ message: "User created successfully!" });
  } catch (error: any) {
    console.error(error);
    if (error.message === "Username already exists") {
      res.status(400).json({ message: "Username already in use" });
    } else if (error.message === "Passwords do not match") {
      res.status(400).json({ message: "Passwords do not match" });
    } else {
      res.status(500).json({ message: "Error creating user" });
    }
  }
};
