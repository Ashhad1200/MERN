import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">MyApp</div>
        <div className="space-x-4">
        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contect</Link>
          <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
          <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
