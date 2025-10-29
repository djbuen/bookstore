import { useState, useTransition } from "react";
import { Favorite } from "@bookstore/types/lib/favorite.type";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../services/favorite.service";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const getAllFavorites = () => {
    startTransition(async () => {
      try {
        setError(null);
        const data = await getFavorites();
        setFavorites(data.favorites);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to load favorites");
      }
    });
  };

  // Add a new favorite
  const addToFavorites = (bookId: string) => {
    startTransition(async () => {
      try {
        setError(null);
        const newFavorite = await addFavorite(bookId);
        setFavorites((prev) => [...prev, newFavorite]);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to add favorite");
      }
    });
  };

  // Remove an existing favorite
  const removeFromFavorites = (favoriteId: string) => {
    startTransition(async () => {
      try {
        setError(null);
        await removeFavorite(favoriteId);
        setFavorites((prev) => prev.filter((fav) => fav.id !== favoriteId));
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to remove favorite");
      }
    });
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    getAllFavorites,
    error,
    isPending,
  };
};
