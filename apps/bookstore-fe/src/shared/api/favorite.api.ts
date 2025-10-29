import { Favorite } from '@favoritestore/types/lib/favorite.type';
import axiosInstance from './axios-instance';

export const getFavorites = () : favorite => axiosInstance.get('/favorites');
export const addFavorite = (id: string) => axiosInstance.post(`/favorites`);
export const removeFavorite = (id: string) => axiosInstance.delete(`/favorites/${id}`);