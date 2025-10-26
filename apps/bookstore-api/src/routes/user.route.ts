import express, { Application } from 'express';
import * as UserController from '../controllers/user.controller';
// =============================
// Express App Setup
// =============================
const app: Application = express();

app.get("/", UserController.getAllUsers);

app.get("/:userID", (req, res) => {
  res.send("Get an existing user");
});

app.post("/", (req, res) => {
  res.send("Create a new user");
});

app.patch("/:userID", (req, res) => {
  res.send("Update an existing user");
});

app.delete("/:userID", (req, res) => {
  res.send("Delete an existing user");
});

export default app;