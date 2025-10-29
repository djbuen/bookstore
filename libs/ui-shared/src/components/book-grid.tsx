import React from "react";
import { Book } from "@bookstore/types";
import { BookCard, SearchField } from '@bookstore/ui-shared';

type BookGridProps = {
  title?: string;
  books: Book[];
  onFavorite?: (bookId: number) => void;
  onClick?: (book: Book) => void;
  onSearch?: (query: string) => void;
};

const BookGrid: React.FC<BookGridProps> = ({ title, books, onFavorite, onClick, onSearch }) => {
  return (
    <section className="my-8 px-8 sm:px-6 lg:px-8">
      {(title || onSearch) && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3 px-1 sm:px-0">
          {title && (
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          )}
          {onSearch && (
            <div className="w-full sm:w-72">
              <SearchField onChange={onSearch} />
            </div>
          )}
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onFavorite={onFavorite} onClick={onClick}/>
        ))}
      </div>
    </section>
  );
};

export default BookGrid;
