import react from "react";
import { BookGrid, BookModal } from "@bookstore/ui-shared";
import { useBooks } from "apps/bookstore-fe/src/shared/hooks/userBooks";

const BooksPage: React.FC = () => {
    const { books, loading, error} = useBooks();
    const [selectedBook, setSelectedBook] = react.useState(null);
    const handleFavorite = (id: number) => {
        console.log(`Book ${id} favorited!`);
    };
    const onClickBook = (book) => {
        setSelectedBook(book);
    };

    const onSearch = () => {
        console.log(`Searching for ${book}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading books.</div>;

    return (
        <div>
            <BookGrid title="Best Sellers" books={books} onFavorite={handleFavorite} onClick={onClickBook} onSearch={onSearch}/>
            <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
        </div>
    );
}

export default BooksPage;