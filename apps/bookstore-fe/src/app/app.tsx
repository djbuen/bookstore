import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "@bookstore/ui-shared";
import { LoginPage } from "./pages/login";
import { RegistrationPage } from "./pages/registration";
import { BooksPage } from "./pages/books";
import { ProtectedRoute } from "./components/protected-routes";

const Home = () => <h1 className="text-2xl font-bold p-6">Welcome to the Bookstore</h1>;

function App() {

  return (
    <>
      <Header /> 
      <main className="max-w-7xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/books"
            element={
              <ProtectedRoute>
                <BooksPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;