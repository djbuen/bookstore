import React, { useState } from "react";
import { Book } from "@bookstore/types";
import { FavoriteButton, Toast } from "@bookstore/ui-shared";
import { useFavorites } from "apps/bookstore-fe/src/shared/hooks/userFavorites";

type BookCardProps = {
  book: Book;
  isFavorite?: boolean;
  onFavorite?: (bookId: number) => void;
  onClick?: (book: Book) => void;
};

const BookCard: React.FC<BookCardProps> = ({ book, isFavorite, onFavorite, onClick }) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const [toastMessage, setToastMessage] = useState("");

  const handleFavorite = () => {
    setFavorite((prev) => !prev);
    onFavorite?.(book.id);
    setToastMessage(!favorite ? "Added to favorites" : "Removed from favorites");
  };
  return (
    <>
    <div className="
    bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 max-h-100 flex flex-col
    hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out
    cursor-pointer group
    "
    onClick={() => onClick?.(book)}
    >
      {/* Image */}
      {book?.imageUrl ? (
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-48 object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 flex-shrink-0">
          No Image
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1 overflow-hidden">
        <div className="mb-2">
          <h3
            className="text-lg font-semibold text-gray-800 truncate"
            title={book.title}
          >
            {book.title}
          </h3>
          <p
            className="text-sm text-gray-500 truncate"
            title={book.author}
          >
            {book.author}
          </p>
          {book.content && (
            <p
              className="text-sm text-gray-700 mt-1 line-clamp-1"
              title={book.content}
            >
              {book.content}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-indigo-600 font-bold">${book.price.toFixed(2)}</span>
          <FavoriteButton isFavorite={favorite} onToggle={handleFavorite} />
        </div>
      </div>
    </div>
    {toastMessage && <Toast message={toastMessage} />}
    </>
  );
};

export default BookCard;