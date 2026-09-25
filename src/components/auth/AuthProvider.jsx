"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const USER_KEY = "movieverse-user";
const AUTH_KEY = "movieverse-auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem(USER_KEY) || "null");

      const storedAuth = localStorage.getItem(AUTH_KEY) === "true";

      setUser(storedUser);
      setIsAuthenticated(storedAuth && Boolean(storedUser));
    } catch {
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(AUTH_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = (userData) => {
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
    localStorage.setItem(AUTH_KEY, "true");

    setUser(userData);
    setIsAuthenticated(true);
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem(USER_KEY) || "null");

    if (!storedUser) {
      return {
        success: false,
        error: "USER_NOT_FOUND",
      };
    }

    if (storedUser.email !== email || storedUser.password !== password) {
      return {
        success: false,
        error: "INVALID_CREDENTIALS",
      };
    }

    localStorage.setItem(AUTH_KEY, "true");

    setUser(storedUser);
    setIsAuthenticated(true);

    return {
      success: true,
    };
  };

  const logout = () => {
    localStorage.setItem(AUTH_KEY, "false");

    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
