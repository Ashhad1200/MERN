import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
  const storeToken = (serverToken) => {
    return localStorage.setItem("Token", serverToken);
  };

  const logout = () => {
    localStorage.removeItem("Token");
  };

  return (
    <AuthContext.Provider value={{ storeToken, logout }}>
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
