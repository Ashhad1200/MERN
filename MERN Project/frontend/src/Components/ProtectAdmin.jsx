import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "../Hooks/useGetProfile";
import LoadingScreen from "./Loader";

const ProtectAdmin = () => {
  const { data, error, isLoading } = useProfile(); // Assuming useProfile provides loading and error states

  // Show a loading spinner or placeholder while fetching the profile data
  if (isLoading) {
    return <LoadingScreen />; // Replace with a proper loading spinner or skeleton UI
  }

  // Handle errors or unauthorized access gracefully
  if (error) {
    console.error("Error fetching profile:", error);
    return <Navigate to="/errorPage" replace />; // Redirect to a custom error page
  }

  const isAdmin = data?.userDetails?.isAdmin;

  // Redirect to unauthorized page if the user is not an admin
  if (!isAdmin) {
    return <Navigate to="/unauthorizedPage" replace />;
  }

  // Render the protected route's component if the user is an admin
  return <Outlet />;
};

export default ProtectAdmin;
