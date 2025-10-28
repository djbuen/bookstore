import React from "react";
import { Book } from "@bookstore/types";

type BookCardProps = {
  book: Book;
  onFavorite?: (bookId: number) => void;
};

const BookCard: React.FC<BookCardProps> = ({ book, onFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {book.imageUrl ? (
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-56 object-cover"
        />
      ) : (
        <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      <div className="p-4 flex flex-col justify-between h-[150px]">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {book.title}
          </h3>
          <p className="text-sm text-gray-500">{book.author}</p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-indigo-600 font-bold">${book.price.toFixed(2)}</span>

          <button
            onClick={() => onFavorite?.(book.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;