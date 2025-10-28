import React from "react";
import { LoginForm } from "@bookstore/ui-shared";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Login to BookStore
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;