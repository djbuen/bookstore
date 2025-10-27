import express, { Application } from 'express';
import * as FavoriteController from '../controllers/favorite.controller';
// =============================
// Express App Setup
// =============================
const app: Application = express();

app.get("/", FavoriteController.getAllFavorites);

// app.get("/:favoriteID", FavoriteController.getBook);

app.post("/", (req, res) => {
  res.send("Create a new favorite");
});

app.patch("/:favoriteID", (req, res) => {
  res.send("Update an existing favorite");
});

app.delete("/:favoriteID", (req, res) => {
  res.send("Delete an existing favorite");
});

export default app;