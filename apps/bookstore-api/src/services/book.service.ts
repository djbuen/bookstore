import { BookModel } from "../models/book.model";

const getAllBooks = async () => {
  return BookModel.getAll();
}

export {
  getAllBooks,
}