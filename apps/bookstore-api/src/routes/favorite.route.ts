import express, { Application } from 'express';
import * as FavoriteController from '../controllers/favorite.controller';
import { authenticate } from '../middlewares/auth.middleware';
const app: Application = express();

app.get("/", authenticate, FavoriteController.getAllFavorites);
app.post("/", authenticate, FavoriteController.addFavorite);
app.delete("/:favoriteID", authenticate, FavoriteController.removeFavorite);

export default app;