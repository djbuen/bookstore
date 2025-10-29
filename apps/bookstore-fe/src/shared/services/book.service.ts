 import { getBooks } from '../api/book.api';

 export const getAllBooks = async () => {
   try {
     const response = await getBooks();
     return response.data.books; 
   } catch (error) {
     console.error('Error fetching users:', error);
     throw error;
   }
 };