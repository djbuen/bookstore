import { Favorite } from './favorite.type';
export type Book = {
  id: number;
  title: string;
  content: string | null;
  date_published: Date;
  author: string;
  price: number;
  imageUrl: string | null;
  favorites: Favorite[];
};

