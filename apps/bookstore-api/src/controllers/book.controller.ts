import { Request, Response } from 'express';
import * as BookService from '../services/book.service';

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookService.getAllBooks();
    res.send({
      message: "Get all books",
      payload: req.params,
      books,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to fetch books",
      error: error.message,
    });
  }
};

export { 
  getAllBooks,
}
