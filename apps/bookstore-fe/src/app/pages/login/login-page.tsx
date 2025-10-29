import React, { useState, useEffect } from "react";
import { LoginForm } from "@bookstore/ui-shared";
import { useUser } from "apps/bookstore-fe/src/shared/hooks/useUser";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { login, error, isPending, isAuthenticated } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e: any, username, password) => {
    e.preventDefault();
    const success = login(username, password);
    console.log("LoginPage - handleSubmit - success:", success);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/books");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Login to BookStore
        </h1>
        <LoginForm
          onSubmit={handleSubmit}
          loading={isPending}
          error={error}
        />
      </div>
    </div>
  );
};

export default LoginPage;