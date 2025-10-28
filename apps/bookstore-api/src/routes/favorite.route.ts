import express, { Application } from 'express';
import * as FavoriteController from '../controllers/favorite.controller';
// =============================
// Express App Setup
// =============================
const app: Application = express();

app.get("/", FavoriteController.getAllFavorites);
app.post("/", FavoriteController.addFavorite);
app.delete("/:favoriteID", FavoriteController.removeFavorite);

export default app;