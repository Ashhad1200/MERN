import { Link } from "react-router-dom";
import { useAuth } from "./auth"; // ensure "auth" path is correct

export const useLogout = () => {
    const { logout } = useAuth();

    logout(); // Directly calling logout

    return;
};




export const Logout = () => {
  return (
    <Link className="text-gray-300 hover:text-white" onClick={useLogout}>Logout</Link>
  )
}
