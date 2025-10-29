import { useState, useEffect } from 'react';
import { getAllBooks } from '../services/book.service';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return { books, loading, error };
};