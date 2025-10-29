import express, { Application } from 'express';
import * as UserController from '../controllers/user.controller';
const app: Application = express();

app.get("/", UserController.getAllUsers);
app.post("/register", UserController.registerUser);
app.post("/login", UserController.loginUser);

export default app;