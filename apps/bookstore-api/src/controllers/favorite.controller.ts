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

export { 
  getAllFavorites,
}
