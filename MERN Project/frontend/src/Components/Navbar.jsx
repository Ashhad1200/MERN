import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/auth";

const Navbar = () => {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // Ensure logout completes before navigating
      navigate("/login", { replace: true }); // Replace history entry to prevent back navigation to protected routes
    } catch (error) {
      console.error("Logout failed:", error);
      // Optionally, you could show a toast or alert to the user here
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">MyApp</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
              <Link to="/register" className="text-gray-300 hover:text-white">
                Register
              </Link>
            </>
          )}
          <Link to="/admin" className="text-gray-300 hover:text-white">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
