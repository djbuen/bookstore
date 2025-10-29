import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../shared/hooks/useUser";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useUser(); // your hook should expose this
  console.log("ProtectedRoute - isAuthenticated:", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};