import React from "react";
import { Book } from "@bookstore/types";
import { BookCard } from '@bookstore/ui-shared';

type BookGridProps = {
  title?: string;
  books: Book[];
  onFavorite?: (bookId: number) => void;
};

const BookGrid: React.FC<BookGridProps> = ({ title, books, onFavorite }) => {
  return (
    <section className="my-8">
      {title && (
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onFavorite={onFavorite} />
        ))}
      </div>
    </section>
  );
};

export default BookGrid;
