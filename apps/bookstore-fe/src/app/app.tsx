import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Header } from "@bookstore/ui-shared";
import { Book } from "@bookstore/types";
import { LoginPage } from "./pages/login";
import { RegistrationPage } from "./pages/registration";
import { BooksPage } from "./pages/books";

const Home = () => <h1 className="text-2xl font-bold p-6">Welcome to the Bookstore</h1>;
const Register = () => <h1 className="text-2xl font-bold p-6">Register Page</h1>;

function App() {

  return (
    <>
      <Header /> 
      <main className="max-w-7xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;