/* eslint-disable */

import React from 'react'
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

import { destinations } from '../data/Destinations';
import { Carousel, IconButton } from "@material-tailwind/react";    
import { chunkArray } from "../utils/chunkArray";
import useWindowSize from "../utils/useWindowSize";


const DestinationScreen = () => {
    const { countryId } = useParams();
    const destination = destinations.find( 
        (dest) => dest.id === countryId
    );

    const navigate = useNavigate();
  
    // Chunk the destinations array into arrays of 6 items each
    const chunkedDestinations = chunkArray(destinations, 4);
    const screenWidth = useWindowSize();

    if (!destination) {
    return <div>Destination not found! </div>;
    }

    return (
    <section className='px-4 md:px-20 py-4'>
        <div className='text-center'>
            <h1 className='text-2xl font-bold mb-2'> Study in {destination.title}</h1>
            <p className='text-justify mb-4 bg-[#4B5685] text-white p-4'>{destination.text}</p>
            <img src={destination.imageHigh} alt={destination.title} className='h-[250px] md:h-[450px] w-full object-cover  rounded-md shadow-md'/>
            <h1 className='text-2xl my-3'>Also See</h1>
             <Carousel
                      className="md:h-[88%] pb-10"
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
                              <div className="flex flex-wrap justify-center gap-3 md:gap-x-20 md:gap-y-2 2xl:gap-x-60 mt-6 px-4">
                                {chunk.map((destination, index) => (
                                <div className="flex flex-col cursor-pointer" onClick={()=>navigate(`/destinations/${destination.id}`)}>
                                    <img
                                    key={index}
                                    src={destination.image}
                                    alt={destination.title}
                                    className="h-60 w-48 md:h-48 md:w-48 2xl:h-80 2xl:w-80 object-cover bg-white rounded-lg shadow-lg  hover:shadow-xl transition"
                                  />
                                  <h1 className="text-center 2xl:text-3xl font-medium mt-2">{destination.title}</h1>
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
        </div>
    </section>
    );
  };

  export default DestinationScreen;