import { Book } from '@bookstore/types/lib/book.type';
import axiosInstance from './axios-instance';

export const getBooks = () : Book => axiosInstance.get('/books');
export const getBooksById = (id: string) => axiosInstance.get(`/books/${id}`);
export const searchBook = (keyword: string) => axiosInstance.get(`/books/search?q=${keyword}`);