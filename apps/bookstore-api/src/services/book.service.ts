import { BookModel } from "../models/book.model";

const getAllBooks = async () => {
  return BookModel.getAll();
}

export const getBookById = async (bookID: number): Promise<BookModel | null> => {
  return await BookModel.getById(bookID);
};

const createBook = async (bookData: Partial<BookModel>): Promise<BookModel> => {
  return await BookModel.create(bookData);
};

const updateBook = async (bookID: number, bookData: Partial<BookModel>): Promise<BookModel | null> => {
  return await BookModel.update(bookID, bookData);
};

const deleteBook = async (bookID: number): Promise<boolean> => {
  return await BookModel.delete(bookID);
};

export {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook
}