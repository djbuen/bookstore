import React from "react";
import { Book } from "@bookstore/types";

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="flex items-center space-x-4 border-b py-2">
      {book.imageUrl && <img src={book.imageUrl} alt={book.title} className="w-16 h-24 object-cover" />}
      <div>
        <h3 className="font-semibold">{book.title}</h3>
        <p className="text-gray-500">{book.author}</p>
        <span className="font-bold">${book.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default BookItem; 