import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const storeToken = (serverToken) => {
        return localStorage.setItem("Token", serverToken);
    }
    return (
    <AuthContext.Provider value = {(storeToken)}>
     { children }
     </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
}