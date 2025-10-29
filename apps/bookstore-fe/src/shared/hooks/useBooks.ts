import { useState, useEffect } from 'react';
import { getAllBooks, searchBooksByKeyword } from '../services/book.service';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchBook = async (keyword: string) => {
    if(keyword.trim() === '' || keyword === null){
      const data = await getAllBooks();
      setBooks(data);
      return;
    }

    try{
      const books = await searchBooksByKeyword(keyword)
      console.log(books);
      setBooks(books);
    }catch(err){
      setError(err);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadBooks();
  }, []);

  return { books, loading, error, searchBook };
};