
/* eslint-disable */
import { Carousel, IconButton } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../utils/useWindowSize";
import { chunkArray } from "../utils/chunkArray";

import { destinations } from "../data/Destinations";

  
  const DestinationsSection = () => {
   const navigate = useNavigate();
  
    // Chunk the destinations array into arrays of 6 items each
    const chunkedDestinations = chunkArray(destinations, 6);
    const screenWidth = useWindowSize();
  
    return (
      <section id="services" className="md:h-screen py-12 md:pt-4 3xl:pt-12 max-w-7xl mx-auto 3xl:max-w-8xl">
        <div className="text-center">
          <h2 className="text-2xl 3xl:text-4xl font-bold">Choose Your Destination</h2>
          <p className="text-red-500 3xl:text-2xl mt-2">We'll get you there</p>
        </div>
        <Carousel
          className="md:h-[98%]"
          autoplay={true}
          loop={true}
          transition={{ duration: 2 }}
          autoplayDelay={5000}
          
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {/* Render each chunk as a slide */}
          
          {
            //  for desktop screens 
            screenWidth>768?
              chunkedDestinations.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className=" justify-center items-center">
                  <div className="flex flex-wrap justify-center gap-3 md:gap-x-44 md:gap-y-2 mt-6 px-4">
                    {chunk.map((destination, index) => (
                    <div className="flex flex-col cursor-pointer" onClick={()=>navigate(`/destinations/${destination.id}`)}>
                        <img
                        key={index}
                        src={destination.image}
                        alt={destination.title}
                        className="h-60 w-48 md:h-48 md:w-48 3xl:h-80 3xl:w-80 object-cover bg-white rounded-lg shadow-lg  hover:shadow-xl transition"
                      />
                      <h1 className="text-center 3xl:text-3xl font-medium mt-2">{destination.title}</h1>
                    </div>
                      
                    ))}
                  </div>
                </div>
              ))
              // for mobile screens
              :destinations.map((destination, index) => (
                <div key={index} className=" flex items-center justify-center flex-col ">
                    <img
                  src={destination.image}
                  alt={destination.title}
                  className=" object-cover h-56 w-56 mt-16 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
                />
                <h1 className="text-center font-medium mt-2">{destination.title}</h1>
                </div>
        )) }

        
        </Carousel>
      </section>
    );
  };
  
  export default DestinationsSection;