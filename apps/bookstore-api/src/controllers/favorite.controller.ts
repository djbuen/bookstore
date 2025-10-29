import { Request, Response } from 'express';
import * as favoriteService from '../services/favorite.service';

const getAllFavorites = async (req: Request, res: Response) => {
  try {
    const favorites = await favoriteService.getAllFavorites();
    res.send({
      message: "Get all favorites",
      payload: req.params,
      favorites,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to fetch favorites",
      error: error.message,
    });
  }
};

const addFavorite = async (req: Request, res: Response) => {
  const { userId, bookId } = req.body;

  try {
    const favorite = await favoriteService.addFavorite({ userId, bookId });
    res.status(201).send({
      message: "Favorite added successfully",
      favorite,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to add favorite",
      error: error.message,
    });
  }
};

const removeFavorite = async (req: Request, res: Response) => {
  const favoriteId = parseInt(req.params.favoriteID);

  try {
    await favoriteService.removeFavorite(favoriteId);
    res.send({
      message: "Favorite removed successfully",
      favoriteId,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to remove favorite",
      error: error.message,
    });
  }
}

export { 
  getAllFavorites,
  addFavorite,
  removeFavorite,
}
