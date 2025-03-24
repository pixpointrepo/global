/* eslint-disable */


import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/text-stroke.css';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative bg-white shadow-md">
      <div className="max-w-7xl 3xl:max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className=" flex items-center">
            <a href="/">
              <img src="/assets/Globe.png" alt="Logo" className="w-20 h-16" />
            </a>
            <div className='text-sm md:text-md 3xl:text-xl text-gray-700 font-bold'>
              <h1>Global Guideline</h1> 
              <h1>Consultancy</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-red-500 font-medium transition">
              Home
            </a>
            <a href='/services'  className="text-gray-600 hover:text-red-500 font-medium transition cursor-pointer">
              Services
            </a>
            <a href='/about' className="text-gray-600 hover:text-red-500 font-medium transition cursor-pointer">
              About Us
            </a>
            <a href='/contact' className="text-gray-600 hover:text-red-500 font-medium transition cursor-pointer">
              Contact Us
            </a>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <a
              onClick={() => navigate('/contact')}
              className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`absolute top-full bg-white w-full z-10 overflow-hidden transition-all duration-500 shadow-md ${
          isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0 '
        }`}
      >
        <hr className="bg-black" />
        <a
          onClick={() => navigate('/')}
          className="block px-4 py-2 text-gray-600 hover:text-gray-900"
        >
          Home
        </a>
        <a
          onClick={() => navigate('/services')}
          className="block px-4 py-2 text-gray-600 hover:text-gray-900"
        >
          Services
        </a>
        <a
          onClick={() => navigate('/about')}
          className="block px-4 py-2 text-gray-600 hover:text-gray-900"
        >
          About Us
        </a>
        <a
          onClick={() => navigate('/contact')}
          className="block px-4 py-2 text-gray-600 hover:text-gray-900"
        >
          Contact Us
        </a>
        <hr className="bg-black" />
      </div>
    </nav>
  );
};




export default Navbar;
