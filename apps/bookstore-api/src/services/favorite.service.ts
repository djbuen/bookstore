import { FavoriteModel } from "../models/favorite.model";
import { Favorite } from "src/types/favorite.type";

const getAllFavorites = async () => {
  return FavoriteModel.getAll();
}

const addFavorite = async (data: { userId: number; bookId: number }): Promise<Favorite> => {
  return FavoriteModel.create(data);
};

const removeFavorite = async (id: number): Promise<void> => {
  return FavoriteModel.delete(id);
};

export {
  getAllFavorites,
  addFavorite,
  removeFavorite
}