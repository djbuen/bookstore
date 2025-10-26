import { Favorite } from './favorite.type';
export type User = {
  id: number;              
  username: string;        
  password: string;
  name: string | null;     
  favorites: Favorite[];   
  createdAt: Date;         
  updatedAt: Date;         
};