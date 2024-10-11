import React from 'react';
import { Link as a } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">MyApp</div>
        <div className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/about" className="text-gray-300 hover:text-white">About</a>
          <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
          <a href="/services" className="text-gray-300 hover:text-white">Services</a>
          <a href="/login" className="text-gray-300 hover:text-white">Login</a>
          <a href="/register" className="text-gray-300 hover:text-white">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
