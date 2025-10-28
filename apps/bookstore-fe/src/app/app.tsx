import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Header, BookGrid } from "@bookstore/ui-shared";
import { Book } from "@bookstore/types";

const mockBooks: Book[] = [
  {
    id: 1,
    title: "Test 1",
    author: "Author 1",
    price: 19.99,
    imageUrl: "https://",
    content: "This is a test book.",
    date_published: new Date(),
    favorites: [],
  },
  {
    id: 2,
    title: "1929",
    author: "Author 2",
    price: 15.49,
    imageUrl: "https://",
    content: "This is a test book.",
    date_published: new Date(),
    favorites: [],
  },
];

const Home = () => <h1 className="text-2xl font-bold p-6">Welcome to the Bookstore 📚</h1>;
const Login = () => <h1 className="text-2xl font-bold p-6">Login Page</h1>;
const Register = () => <h1 className="text-2xl font-bold p-6">Register Page</h1>;

function App() {
  const handleFavorite = (id: number) => {
    console.log(`Book ${id} favorited!`);
  };

  return (
    <>
      <Header /> 
      <main className="max-w-7xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookGrid title="All" books={mockBooks} onFavorite={handleFavorite} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;