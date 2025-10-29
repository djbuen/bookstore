import { getBooks, searchBook } from '../api/book.api';

export const getAllBooks = async () => {
   try {
     const response = await getBooks();
     return response.data.books; 
   } catch (error) {
     console.error('Error fetching users:', error);
     throw error;
   }
 };

export const searchBooksByKeyword = async (keyword: string) => {
   try {
     const response = await searchBook(keyword);
     return response.data.books;
   } catch (error) {
     console.error('Error fetching users:', error);
     throw error;
   }
 };