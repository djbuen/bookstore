import { Request, Response } from 'express';
import * as BookService from '../services/book.service';
import { createBookSchema, updateBookSchema } from "../validations/book.validation";

// Get all books
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

// Get a book by ID
const getBookById = async (req: Request, res: Response): Promise<Response | undefined> => {
  try {
    const bookID = parseInt(req.params.bookID);

    // Check if the bookID is valid
    if (isNaN(bookID)) {
      return res.status(400).send({
        message: "Invalid book ID format.",
      });
    }

    const book = await BookService.getBookById(bookID);

    if (!book) {
      return res.status(404).send({
        message: "Book not found",
      });
    }

    res.status(200).send({
      message: "Book retrieved successfully",
      book,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to fetch book",
      error: error.message,
    });
  }
};

// Create a new book
const createBook = async (req: Request, res: Response) => {
  try {
    const bookData = createBookSchema.parse(req.body);

    console.log("Received book data:", bookData);
    const newBook = await BookService.createBook(bookData);
    res.status(201).send({
      message: "Book created successfully",
      book: newBook,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to create book",
      error: error.message,
    });
  }
};

// Update an existing book
const updateBook = async (req: Request, res: Response) => {
  try {
    const bookID = parseInt(req.params.bookID);
    const bookData = updateBookSchema.parse(req.body);

    const updatedBook = await BookService.updateBook(bookID, bookData); 
    if (updatedBook) {
      res.status(200).send({
        message: "Book updated successfully",
        book: updatedBook,
      });
    } else {
      res.status(404).send({
        message: "Book not found",
      });
    }
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to update book",
      error: error.message,
    });
  }
};

// Delete a book
const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookID = parseInt(req.params.bookID);
    const isDeleted = await BookService.deleteBook(bookID);
    if (isDeleted) {
      res.status(200).send({
        message: "Book deleted successfully",
      });
    } else {
      res.status(404).send({
        message: "Book not found",
      });
    }
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to delete book",
      error: error.message,
    });
  }
};

const searchBooks = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;

    if (!q || typeof q !== "string") {
      return res.status(400).send({
        message: "Query parameter 'q' is required and must be a string",
      });
    }

    const books = await BookService.searchBooks(q);

    res.status(200).send({
      message: `Search results for "${q}"`,
      count: books.length,
      books,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Failed to search books",
      error: error.message,
    });
  }
};


export { 
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  searchBooks,
}
