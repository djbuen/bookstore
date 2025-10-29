import { useState, useTransition } from "react";
import { loginUser } from "../services/user.service";
import { User } from "@bookstore/types/user.types";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const login = (email: string, password: string) => {
    startTransition(async () => {
      setError(null); // reset previous errors
      try {
        const loggedInUser = await loginUser(email, password);
        setUser(loggedInUser);
      } catch (err: any) {
        setError(err.response?.data?.message || "Login failed");
      }
    });
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("auth-token");
  };

  const isAuthenticated = !!localStorage.getItem("auth-token") || !!sessionStorage.getItem("auth-token");

  return {
    user,
    login,
    logout,
    error,
    isPending,
    isAuthenticated
  };
};
