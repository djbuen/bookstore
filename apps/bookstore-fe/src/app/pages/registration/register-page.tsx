import React from "react";
import { RegistrationForm } from "@bookstore/ui-shared";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Register to BookStore
        </h1>
        <p className="text-red-500">I haven't implemented this part, you can create an account via api or postman collection</p>
        <RegistrationForm/>
      </div>
    </div>
  );
};

export default LoginPage;