import { ReactNode, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

type AuthProviderProps = { children: ReactNode }

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const isAuthenticatedStorage = localStorage.getItem("isAuthenticated")
  const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedStorage === "true");

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };
  const logout = () => {
    setIsAuthenticated(false)
    localStorage.setItem("isAuthenticated", "false");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};