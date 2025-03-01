import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../images/logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0E749A] py-4 shadow-lg">
      <div className="w-full flex justify-between items-center px-6 md:px-10">
        {/* Left side - Logo */}
        <div>
         <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="Search-In Logo" className="h-10 w-auto" />
         </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Right side - Navigation Links */}
        <div
          className={`md:flex md:flex-row md:items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0E749A] md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out ${menuOpen ? 'flex flex-col' : 'hidden'}`}
        >
          <a href="/" className="text-white text-lg hover:text-gray-200 transition-colors duration-300">
            Home
          </a>
          <a href="/about" className="text-white text-lg hover:text-gray-200 transition-colors duration-300">
            About Us
          </a>
          <a 
            href="/contact"
            className="bg-white text-[#0E749A] text-lg px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
