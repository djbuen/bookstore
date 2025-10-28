import express, { Application } from 'express';
import * as BookController from '../controllers/book.controller';
// =============================
// Express App Setup
// =============================
const app: Application = express();

app.get("/", BookController.getAllBooks);
app.get("/:bookID", BookController.getBookById);
app.post("/", BookController.createBook);
app.patch("/:bookID", BookController.updateBook);
app.delete("/:bookID", BookController.deleteBook);

export default app;