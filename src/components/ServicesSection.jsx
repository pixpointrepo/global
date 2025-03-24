/* eslint-disable */

import React from 'react'
import { useContext } from 'react';

import { motion } from "framer-motion"; 

import { useNavigate } from "react-router-dom";


const ServicesSection = () => {

  return (
    <section id='services' className="py-10 h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Services</h2>
          <p className="text-red-500 mt-2">Accompanying you every step of the way</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-x-32 md:gap-y-12 mt-6 px-4">
          {[
            { title: "Study Abroad", image: "assets/student.png" },
            { title: "Test Preparation", image: "assets/exam.png" },
            { title: "Documentation", image: "assets/documents.png" },
            // { title: "Mock Test", image: "assets/icons/checklist.png" },
            // { title: "Test Registration", image: "assets/icons/date.png" },
          ].map((service, index) => (
            <div
              key={index}
              className="mt-20 h-60 w-44 md:h-72 md:w-64 bg-white rounded-lg shadow-lg py-6 md:p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <button className="mt-4 bg-red-500 text-white p-2 md:px-3 md:py-2 rounded-lg hover:bg-red-600">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

  )
}

export default ServicesSection