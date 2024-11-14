import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/auth";

const Navbar = () => {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-full p-4 shadow-lg mx-4 my-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">MyApp</div>
        <div className="space-x-6 flex items-center">
          <Link to="/" className="text-gray-200 hover:text-white transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-200 hover:text-white transition duration-300">
            About
          </Link>
          <Link to="/contact" className="text-gray-200 hover:text-white transition duration-300">
            Contact
          </Link>
          <Link to="/services" className="text-gray-200 hover:text-white transition duration-300">
            Services
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-gray-200 hover:text-white transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-gray-200 hover:text-white transition duration-300">
                Login
              </Link>
              <Link to="/register" className="text-gray-200 hover:text-white transition duration-300">
                Register
              </Link>
            </>
          )}
          <Link to="/admin" className="text-gray-200 hover:text-white transition duration-300">
            Admin
          </Link>
          <Link to="/profile" className="text-gray-200 hover:text-white transition duration-300">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
