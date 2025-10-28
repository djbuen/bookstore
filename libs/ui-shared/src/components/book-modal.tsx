import React from "react";
import { Book } from "@bookstore/types";

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-md p-6 w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          ✕
        </button>
        {book.imageUrl && <img src={book.imageUrl} alt={book.title} className="w-full h-64 object-cover mb-4" />}
        <h2 className="text-xl font-bold">{book.title}</h2>
        <p className="text-gray-500 mb-2">{book.author}</p>
        <p className="mb-2">{book.content}</p>
        <span className="font-bold">${book.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default BookModal;
