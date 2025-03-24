/* eslint-disable */
import React from 'react';
import { motion } from 'framer-motion';

const TeamMemberComponent = ({ member, index }) => {
  return (
    <motion.div
      key={index}
      className="p-4 m-2  border rounded-lg shadow-md text-center"
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true , amount: 0.3}}
    >
      <div className="flex flex-col md:flex-row items-center justify-center my-6 gap-6">
          <div className="w-full md:w-1/3 "> 
            <img
              src={member.image}
              alt={member.name}
              className="w-full md:h-72 lg:h-96 object-cover rounded-xl shadow-md "
            />
          </div>
          <div className="flex flex-col gap-6  text-center md:w-2/3"> {/* Ensures text content takes the remaining width */}
            <h3 className="text-lg lg:text-2xl font-bold">{member.title}</h3>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-justify text-gray-600">{member.message}</p>
            <p className=" font-semibold lg:text-xl text-blue-800">- {member.name}</p>
          </div>
      </div>
    </motion.div>

  );
};

export default TeamMemberComponent;
