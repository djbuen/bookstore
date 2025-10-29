import { Request, Response, NextFunction } from "express";
// @ts-ignore
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // same key used to sign

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing or invalid Authorization header" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = verify(token, JWT_SECRET) as {
      userId: number;
      username: string;
      iat: number;
      exp: number;
    };

    res.locals.user = {
      userId: decoded.userId,
      username: decoded.username,
    };

    next(); //continue
  } catch (err: any) {
    console.error("JWT verification failed:", err.message);
    return res.status(401).json({ message: "Unauthorized or invalid token" });
  }
};