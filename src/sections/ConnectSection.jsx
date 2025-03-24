/* eslint-disable */

import React from 'react'
import platformSvgs from '../components/svgs';


const ConnectSection = () => {
    return (
      <footer className=" bg-slate-200 px-10 py-12 text-[#4B5685]">
        <div className="max-w-7xl mx-auto px-4  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Left: Logo and Description */}
          <div>
            <img
              src="/assets/images/Globe.png"
              alt="Logo"
              className="w-20 h-16 mb-4"
            />
            <p className=" text-sm">
              One of the leading educational consultancy in Nepal with a record of hundreds of successful visa processes.
            </p>
            <p className="mt-4 text-sm">
              Shibashakti Chowk, Old Baneshwor-09, Kathmandu, Nepal
            </p>
          </div>
  
          {/* Middle: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 ">
              <li><a href="#" className="hover:text-black hover:font-medium">About Us</a></li>
              <li><a href="#" className="hover:text-black hover:font-medium">Contact Us</a></li>
              <li><a href="#" className="hover:text-black hover:font-medium">Visa Process</a></li>
              <li><a href="#" className="hover:text-black hover:font-medium">Test Preparation</a></li>
              <li><a href="#" className="hover:text-black hover:font-medium">Documentation</a></li>
              <li><a href="#" className="hover:text-black hover:font-medium">Registration</a></li>
            </ul>
          </div>
  
          {/* Right: Social Media and Stay Connected Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
                  {platformSvgs.map((platform, index) => (
                    <a
                      key={index}
                      href={`#${platform.name}`}
                      className="p-1.5 w-9 h-9 flex justify-center items-center bg-black rounded-full hover:bg-red-500 text-white hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {platform.icon}
                    </a>
                  ))}
            </div>
  
            {/* Stay Connected Form */}
            <h3 className="text-lg font-semibold my-4">Stay Connected</h3>
            <form action="#" method="POST" className="space-y-4">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; 2025 Pixpoint Solutions Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
export default ConnectSection