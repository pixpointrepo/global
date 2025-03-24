/* eslint-disable */

// import React from 'react';
import { useContext, useState } from "react";
import axios from "axios";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MyLeafletMap from "../components/LeafletMap";
import SuccessModal from "../components/SuccessModal";


const FormComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    gender: '', 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

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

    if (!isChecked) {
      setSuccessMessage("Please agree to the terms and conditions before proceeding.");
      setIsModalVisible(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to PHP backend using axios
      const response = await axios.post('http://localhost:8000/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      console.log('error log:', response.data, response.statusText);  // Axios automatically parses the response
    
      // Handle the success response
      if (response.status !== 200) {
        throw new Error('Form submission failed');
      }
    
      setSuccessMessage("Your inquiry has been successfully delivered. Thank you!");
      setError(null);
      setIsModalVisible(true);
    
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        gender: '', 
      });
    } catch (error) {
      setIsSubmitting(false);
      setError(error.message || 'Something went wrong');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-3 3xl:space-y-18 3xl:text-2xl  text-xs sm:text-sm md:text-base lg:text-base">
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
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleInputChange}
          pattern="^\d{10}$"
          title="Please enter a valid mobile number"
          required
          className={`w-full mt-2 p-2 border rounded-lg focus:ring-2 ${
            "border-gray-300 focus:ring-blue-500"
          }`}
          
        />
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleInputChange}
          className={`w-full mt-2 p-2 border rounded-lg focus:ring-2 ${
            "border-gray-300 focus:ring-blue-500"
          }`}
          placeholder="Subject of Your Inquiry"
        />

        {/*  Gender Field */}
        <div className="flex space-x-4 ">
         
          <div className="w-1/2">
            <label htmlFor="gender" className="text-md font-medium text-gray-600">
              Gender *
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={formData.gender}
              onChange={handleInputChange}
              className={`w-full mt-2 p-2 border rounded-lg focus:ring-2 ${formData.gender === '' ? 'text-gray-500' : 'text-black'}`}
            >
              <option  value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-12 mr-2"
          />
          <label htmlFor="agree-to-terms" className="text-xs sm:text-sm md:text-base lg:text-base font-light text-black text-justify">
            I agree to the terms, conditions and privacy policy.
          </label>
        </div>

        <button className="text-md px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" type="submit" disabled={isSubmitting}>
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



const ContactSection = () => {
  
  return (
    <section
  id="contact"
  className={`md:h-screen px-4 sm:px-4 md:px-10 lg:px-12 py-4  ${
   "bg-[#4B5685] text-black"
  }`}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 3xl:py-32  ">
    
    {/* Col 1 */}
    <div className="justify-start items-center px-0 sm:px-4 md:px-10 lg:px-10  min-h-[400px]  ">
    <h1 className="text-md sm:text-xl md:text-3xl 3xl:text-4xl font-medium  text-white my-4">Get Started</h1>
    <p className="my-4 text-xl 3xl:text-2xl text-white">Accelerate your growth overseas and join one of the leading companies to work </p>

    <div className="bg-gray-100 mt-20 w-full h-[53%] 3xl:h-[70%] p-3 rounded-xl shadow-[-4px_4px_12px_rgba(0,0,0,0.25)]">
          <h1 className="text-md sm:text-xl md:text-2xl lg:text-2xl font-medium mb-4 self-start ">Directions</h1>
          <MyLeafletMap/>
        </div>
    </div>

    {/* Col 2 */}
    
      <div
        className={`${
         "bg-white "
        }  mt-6 md:mt-0 w-[100%] sm:w-[95%] md:w-[85%]  3xl:h-[700px] px-6 md:px-10 lg:px-10 py-10 rounded-xl`}
      >
        <h1
          className={`text-md sm:text-xl md:text-2xl lg:text-2xl font-medium ${
            "text-black"
          }`}
        >
          Your Contact Info
        </h1>
       
        <FormComponent />
      </div>
    </div>
  
</section>
  
  );
};

export default ContactSection;
