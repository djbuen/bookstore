import { User } from './user.type';
import { Book } from './book.type';
export type Favorite = {
  id: number;              
  userId: number;          
  bookId: number;          
  createdAt: Date;         
  updatedAt: Date;         
  deletedAt: Date | null;  
  user: User | null;              
  book: Book;              
};