import react, { useTransition, useRef, useEffect } from "react";
import { BookGrid, BookModal } from "@bookstore/ui-shared";
import { useBooks } from "apps/bookstore-fe/src/shared/hooks/useBooks";
import { useFavorites } from "apps/bookstore-fe/src/shared/hooks/userFavorites";

const BooksPage: React.FC = () => {
    const { books, loading, error, searchBook} = useBooks();
    const [selectedBook, setSelectedBook] = react.useState(null);
    const [isPending, startTransition] = useTransition();
    const { favorites, getAllFavorites, addToFavorites, removeFromFavorites } = useFavorites();
    const onClickBook = (book) => {
        setSelectedBook(book);
    };

    // this can still be improved by using useDebounce hook
    const debounceRef = useRef<number | null>(null);
    const onSearch = (keyword: string) => {
        // clear previous timer
        if (debounceRef.current) clearTimeout(debounceRef.current);

        // set timer
        debounceRef.current = window.setTimeout(() => {
        startTransition(() => {
            searchBook(keyword);
            console.log(`Searching for ${keyword}`);
        });
        }, 400); // debounce delay
    };

    //load favorites on mount
    useEffect(() => {
        getAllFavorites();
    }, []);

    const handleFavoriteToggle = (bookId: number) => {
        const isFav = favorites.some((fav) => fav.bookId === bookId);
        if (isFav) {
            const fav = favorites.find((f) => f.bookId === bookId);
            if (fav) removeFromFavorites(fav.id.toString());
        } else {
            addToFavorites(bookId.toString());
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading books.</div>;

    return (
        <div>
            <BookGrid
                title="Best Sellers"
                books={books}
                favorites={favorites}
                onFavorite={handleFavoriteToggle}
                onClick={onClickBook}
                onSearch={onSearch}/>
            <BookModal
                book={selectedBook}
                onClose={() => setSelectedBook(null)} />
        </div>
    );
}

export default BooksPage;