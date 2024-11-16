import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/auth";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaTools,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaUserShield,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";
import { useProfile } from "../Hooks/useGetProfile";

const Navbar = () => {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data } = useProfile();
  const { userDetails } = data || {};
  const { isAdmin } = userDetails || {};

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg p-4 rounded-lg mx-4 my-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">MyApp</div>

        {/* Hamburger Icon for mobile */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="w-6 h-6" />
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-8 lg:ml-auto w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-8 text-center">
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 text-gray-100 hover:text-white transition duration-200"
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center space-x-2 text-gray-100 hover:text-white transition duration-200"
            >
              <FaInfoCircle />
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-2 text-gray-100 hover:text-white transition duration-200"
            >
              <FaEnvelope />
              <span>Contact</span>
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center space-x-2 text-gray-100 hover:text-white transition duration-200"
            >
              <FaTools />
              <span>Services</span>
            </Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center justify-center space-x-2 text-gray-100 hover:text-white transition duration-200"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center justify-center space-x-2 text-gray-100 hover:text-white transition duration-200"
                >
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center justify-center space-x-2 text-gray-100 hover:text-white transition duration-200"
                >
                  <FaUserPlus />
                  <span>Register</span>
                </Link>
              </>
            )}

            {isAdmin && (
              <>
                <Link
                  to="/admin"
                  className="flex items-center justify-center space-x-2 text-gray-100 hover:text-white transition duration-200"
                >
                  <FaUserShield />
                  <span>Admin</span>
                </Link>
              </>
            )}
            <Link
              to="/profile"
              className="flex items-center justify-center space-x-2 text-gray-100 hover:text-white transition duration-200"
            >
              <FaUser />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
