import { Favorite } from '@bookstore/types/lib/favorite.type';
import axiosInstance from './axios-instance';

export const getFavorites = () : Favorite => axiosInstance.get('/favorites');
export const addFavorite = (id: string) => axiosInstance.post(`/favorites`);
export const removeFavorite = (id: string) => axiosInstance.delete(`/favorites/${id}`);