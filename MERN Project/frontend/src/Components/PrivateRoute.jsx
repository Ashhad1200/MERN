import { Navigate, Outlet } from "react-router-dom";

// This component will wrap the protected routes
const PrivateRoute = () => {
  const token = localStorage.getItem("Token");

  // If token is not available (i.e., user is not authenticated), redirect to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the protected route's component (via Outlet)
  return <Outlet />;
};

export default PrivateRoute;
