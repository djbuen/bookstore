import express, { Application } from 'express';
// =============================
// Express App Setup
// =============================
const app: Application = express();

app.get("/", (req, res) => {
  res.send("Get all users");
});

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