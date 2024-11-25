import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const token = localStorage.getItem("Token");
  const isLoggedIn = !!token;

  const storeToken = (serverToken) => {
    return localStorage.setItem("Token", serverToken);
  };

  const storeRefreshToken = (serverToken) => {
    return localStorage.setItem("refreshToken", serverToken);
  };

  const logout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("refreshToken");
  };

  return (
    <AuthContext.Provider value={{ storeToken, storeRefreshToken, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
