import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUser } from "apps/bookstore-fe/src/shared/hooks/useUser";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useUser(); // get auth state and logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clear session/auth token
    navigate("/login"); // redirect to login
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center relative z-20">
      <Link to="/" className="text-xl font-bold text-gray-800 whitespace-nowrap">
        Dave's BookStore
      </Link>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menu */}
      <nav
        className={`${
            isOpen ? "block" : "hidden"
        } absolute top-full right-0 bg-white shadow-md md:shadow-none md:static md:flex md:space-x-4 z-10 justify-end`}
        >
      
        <Link
          to="/books"
          className="block px-4 py-2 text-gray-600 hover:text-gray-800 md:inline-block"
          onClick={() => setIsOpen(false)}
        >
          Books
        </Link>
        {!isAuthenticated ? (
          <>
            <Link
              to="/login"
              className="block px-4 py-2 text-gray-600 hover:text-gray-800 md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block px-4 py-2 text-gray-600 hover:text-gray-800 md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="block px-4 py-2 text-gray-600 hover:text-gray-800 md:inline-block"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;