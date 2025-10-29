import { Favorite } from "@bookstore/types/lib/favorite.type";
import axiosInstance from "../api/axios-instance";

export const getFavorites = async (): Promise<Favorite[]> => {
  const res = await axiosInstance.get<Favorite[]>("/favorites");
  return res.data;
};

export const addFavorite = async (bookId: string): Promise<Favorite> => {
  const res = await axiosInstance.post<Favorite>("/favorites", { bookId });
  return res.data;
};

export const removeFavorite = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/favorites/${id}`);
};