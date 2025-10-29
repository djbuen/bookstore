import react from "react";
import { BookGrid } from "@bookstore/ui-shared";
import { useBooks } from "apps/bookstore-fe/src/shared/hooks/userBooks";

const BooksPage: React.FC = () => {
    const { books, loading, error} = useBooks();
    const handleFavorite = (id: number) => {
        console.log(`Book ${id} favorited!`);
    };
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading books.</div>;

    return (
        <div>
            <BookGrid title="Best Sellers" books={books} onFavorite={handleFavorite} />
        </div>
    );
}

export default BooksPage;