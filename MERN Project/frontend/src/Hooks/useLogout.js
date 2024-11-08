import { useEffect } from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

export const Logout = () => {
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    }, [logout]);

    return <Navigate to="/login" />;
};
