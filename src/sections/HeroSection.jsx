/* eslint-disable */
import { useNavigate } from "react-router-dom"

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 h-screen">
          <div className=" mx-auto px-4 sm:px-6 lg:px-20 flex flex-col md:flex-row items-center h-full">
            {/* Left Content */}
            <div className="py-20 md:py-0 text-center md:text-left md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-extrabold text-gray-800">
                Start your International Journey with Us
              </h1>
              <p className="text-gray-600 text-lg 2xl:text-3xl leading-relaxed">
                As one of Nepal's best education consultancy, we help students get
                into top-tier universities all around the globe.
              </p>
              <a
                onClick={()=>navigate('/services')}
                className="inline-flex items-center cursor-pointer 2xl:text-4xl bg-red-500 text-white px-6 py-3 rounded-md shadow hover:bg-red-600 transition text-lg font-medium "
              >
                Start Now
                <svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
    
            {/* Right Image */}
            <div className="mt-8 md:mt-0 md:ml-12 md:w-1/2">
              <img
                src="/assets/hero-image-compressed.jpg"
                alt="Hero Image"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
  )
}

export default HeroSection

