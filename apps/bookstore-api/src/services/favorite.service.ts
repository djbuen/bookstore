import { FavoriteModel } from "../models/favorite.model";

const getAllFavorites = async () => {
  return FavoriteModel.getAll();
}

export {
  getAllFavorites,
}