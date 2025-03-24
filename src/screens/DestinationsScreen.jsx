/* eslint-disable */

import { useNavigate } from "react-router-dom"
import { destinations } from "../data/Destinations"
import ScrollToTop from "../utils/scrollToTop";

const DestinationsScreen = () => {
  const navigate = useNavigate();
  return (
   <section className="py-4">
    <div className="text-center ">
        <h2 className="text-2xl font-bold">Study Abroad</h2>
        <h2 className=" text-xl text-[#2E3B71] mt-1">Choose Your Destination</h2>
        <h2 className=" text-red-500 mt-2">We'll get you there</h2>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-x-4 md:px-20 md:gap-x-20">
        {destinations.map((destination, index) => (
                <div onClick={()=>navigate(`/destinations/${destination.id}`)} key={index} className=" flex items-center cursor-pointer justify-center flex-col ">
                    <img
                    src={destination.image}
                    alt={destination.title}
                    className=" object-cover h-28 w-28 md:h-56 md:w-56 mt-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
                    />
                    <h1 className="text-center font-medium mt-2">{destination.title}</h1>
                </div>
        ))}
    </div>
   </section>
  )
}

export default DestinationsScreen