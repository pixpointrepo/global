/* eslint-disable */

import React from 'react'
import { useContext } from 'react';

import { motion } from "framer-motion"; 

import { useNavigate } from "react-router-dom";


const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id='services' className="py-10 h-screen">
        <div className="text-center">
          <h2 className="text-2xl 2xl:text-4xl font-bold ">Services</h2>
          <p className="text-red-500 2xl:text-3xl mt-2">Accompanying you every step of the way</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-x-32 md:gap-y-12 mt-6 px-4">
          {[
            { title: "Study Abroad", image: "/assets/student.png", path:"/destinations" },
            { title: "Test Preparation", image: "/assets/exam.png", path:"/test" },
            { title: "Documentation", image: "/assets/documents.png", path:"/documentation" },
          ].map((service, index) => (
            <div
            key={index}
            className="mt-10 md:mt-20 h-auto w-full sm:w-44 sm:h-60 md:w-64 md:h-72 2xl:w-[400px] 2xl:h-[500px] cursor-pointer bg-white rounded-lg shadow-lg py-4 md:p-6 text-center hover:shadow-xl transition"
            onClick={() => navigate(service.path)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="mx-auto mb-4 w-16 h-16 sm:w-20 sm:h-20 2xl:w-[70%] 2xl:h-[60%]"
            />
            <h3 className="text-base sm:text-lg md:text-xl 2xl:text-3xl font-semibold">{service.title}</h3>
            <button className="mt-4 bg-red-500 text-white p-2 sm:px-3 sm:py-2 md:px-4 md:py-2  2xl:text-2xl rounded-lg hover:bg-red-600">
              Learn More
            </button>
          </div>
          ))}
        </div>
      </section>

  )
}

export default ServicesSection