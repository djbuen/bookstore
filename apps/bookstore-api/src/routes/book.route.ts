import express, { Application } from 'express';
import * as BookController from '../controllers/book.controller';
// =============================
// Express App Setup
// =============================
const app: Application = express();

app.get("/", BookController.getAllBooks);

// app.get("/:bookID", BookController.getBook);

app.post("/", (req, res) => {
  res.send("Create a new book");
});

app.patch("/:bookID", (req, res) => {
  res.send("Update an existing book");
});

app.delete("/:bookID", (req, res) => {
  res.send("Delete an existing book");
});

export default app;