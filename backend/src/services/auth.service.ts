import AppDataSource from "../db/config";
import { User } from "../models/user.model";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";

export const signUpService = async (
  userData: any,
): Promise<User | undefined> => {
  const { fullname, username, password, confirmPassword, gender } = userData;

  try {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const selectedUser: User | null = await userRepo.findOne({
      where: { username },
    });
    if (selectedUser !== null) {
      throw new Error("Username already exists");
    }
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const hashedPassword = await bcrypt.hash(password as string, 10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = {
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    };
    const createdUser = userRepo.create(newUser as User);
    await userRepo.save(createdUser);

    return createdUser;
  } catch (error) {
    throw error;
  }
};
