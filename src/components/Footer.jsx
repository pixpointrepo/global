// import React from 'react'

/* eslint-disable */
import { useContext } from "react";

import {React, useState} from "react";
import platformSvgs from "./svgs";
import { useNavigate } from "react-router-dom";
import axios from "axios";  

import SuccessModal from "./SuccessModal";

const FormComponent = () => {
  
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  
  });


  // Handle change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      
      const response = await axios.post('http://localhost:8000/api/email', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle the success response
      if (response.status !== 200) {
        throw new Error('Form submission failed');
      }
    
      setError(null);
      setSuccessMessage("Your contact info has been successfully delivered. Thank you!");
      setIsModalVisible(true);
    
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
      });
    } catch (error) {
      setIsSubmitting(false);
      setError(error.message || 'Something went wrong');
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-3 2xl:space-y-18 2xl:text-2xl  text-xs sm:text-sm md:text-base lg:text-base">
        <input
          type="text"
          id="full-name"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleInputChange}
          className={`w-full mt-2 p-2 border rounded-lg focus:ring-2 ${
            "border-gray-300 focus:ring-blue-500"
          }`}
          placeholder="Your Full Name"
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full mt-2 p-2 border rounded-lg focus:ring-2 ${
            "border-gray-300 focus:ring-blue-500"
          }`}
          placeholder="Your Email Address"
        />
        

        <button className="text-md w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {error && <p>{error}</p>}

      {/* success message */}
      {isModalVisible && (
        <SuccessModal
          message={successMessage}
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </>
  );
};



const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className=" bg-slate-200 px-10 py-12 text-[#4B5685]">
      <div className="max-w-7xl mx-auto px-4  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Left: Logo and Description */}
        <div>
          <div className=" flex items-center my-2">
            <a href="/">
              <img src="/assets/Globe.png" alt="Logo" className="w-20 h-16" />
            </a>
            <div className='text-gray-700 font-bold'>
              <h1>Global Guideline</h1> 
              <h1>Consultancy</h1>
            </div>
          </div>
          
          <p className=" text-sm">
            One of the leading educational consultancy in Nepal with a record of
            hundreds of successful visa processes.
          </p>
          <p className="mt-4 text-sm">
            Shibashakti Chowk, Old Baneshwor-09, Kathmandu, Nepal
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 ">
            <li>
              <a href="/about" className= "cursor-pointer hover:text-black hover:font-medium">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className=" cursor-pointer hover:text-black hover:font-medium">
                Contact Us
              </a>
            </li>
        
            <li>
              <a href="/test" className="cursor-pointer hover:text-black hover:font-medium">
                Test Preparation
              </a>
            </li>
            <li>
              <a href="/documentation" className="cursor-pointer hover:text-black hover:font-medium">
                Documentation
              </a>
            </li>
           
          </ul>
        </div>

        {/* Right: Social Media and Stay Connected Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {platformSvgs.map((platform, index) => (
              <a
                key={index}
                href={platform.href}
                className="p-1.5 w-9 h-9 flex justify-center items-center bg-black rounded-full hover:bg-red-500 text-white hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                {platform.icon}
              </a>
            ))}
          </div>

          {/* Stay Connected Form */}
          <h3 className="text-lg font-semibold my-4">Stay Connected</h3>
          <FormComponent />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-400">
        <p>&copy; 2025 Global Guidelines Consultancy. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
