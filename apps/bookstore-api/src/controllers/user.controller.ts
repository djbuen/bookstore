import { Request, Response } from 'express';
import * as UserService from '../services/user.service';
// @ts-ignore
import { hash, compare } from 'bcrypt';
// @ts-ignore
import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // replace in prod

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.send({
      message: "Get all users",
      payload: req.params,
      users,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const existingUser = await UserService.findUserByUsername(username);
    if (existingUser) {
      return res.status(400).send({ message: "Username already in use" });
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create user
    const newUser = await UserService.createUser({
      username,
      password: hashedPassword,
    });

    res.status(201).send({
      message: "User registered successfully",
      user: { id: newUser.id, username: newUser.username },
    });
  } catch (error: any) {
    res.status(500).send({ message: "Registration failed", error: error.message });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await UserService.findUserByUsername(username);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Compare password
    const validPassword = await compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid password" });
    }

    // Generate JWT
    const token = sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });

    res.send({ message: "Login successful", token });
  } catch (error: any) {
    res.status(500).send({ message: "Login failed", error: error.message });
  }
};

export {
  getAllUsers,
  registerUser,
  loginUser,
};
