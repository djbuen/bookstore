import React, { useState, useMemo } from "react";
import { Book } from "@bookstore/types";
import { BookCard, SearchField, Filters } from '@bookstore/ui-shared';
import { Favorite } from "@bookstore/types/lib/favorite.type";

type BookGridProps = {
  title?: string;
  books: Book[];
  favorites: Favorite[];
  onFavorite?: (bookId: number) => void;
  onClick?: (book: Book) => void;
  onSearch?: (query: string) => void;
};

const BookGrid: React.FC<BookGridProps> = ({ title, books, favorites=[], onFavorite, onClick, onSearch }) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const labels = ["All", "Favorites"];

  // Filter books based on selection
  const filteredBooks = useMemo(() => {
    if (selectedFilter === "Favorites") {
      const favoriteBookIds = favorites.map((fav) => fav.bookId);
      return books.filter((book) => favoriteBookIds.includes(book.id));
    }
    return books;
  }, [selectedFilter, books, favorites]);

  return (
    <section className="my-8 px-8 sm:px-6 lg:px-8">
      {(title || onSearch) && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3 px-1 sm:px-0">
          {title && (
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          )}
          <Filters
              labels={labels}
              selectedLabel={selectedFilter ?? "All"}
              onSelectLabel={setSelectedFilter}
            />
          {onSearch && (
            <div className="w-full sm:w-72">
              <SearchField onChange={onSearch} />
            </div>
          )}
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredBooks.map((book) => {
          const isFavorite = favorites.some(fav => fav.bookId === book.id)
          return (<BookCard
            key={book.id}
            book={book}
            isFavorite={isFavorite}
            onFavorite={onFavorite}
            onClick={onClick}/>)
        })}
      </div>
    </section>
  );
};

export default BookGrid;
