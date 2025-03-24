
/* eslint-disable */

const CounselorSection = () => {
  return ( 
    <section id="counselor" className="h-screen"> 
        <div className="flex flex-col md:flex-row">
            
            <div className="flex flex-1 h-screen">
            <img src="/assets/counselor.png" alt="" className="w-full object-cover"/>
            </div>
        
            <div className="flex flex-col flex-1 items-center md:justify-center text-center bg-[#4C5785] py-16 text-white box-border">
            <h1 className="text-2xl 2xl:text-4xl mb-5">Meet the counselor</h1>
            <p className="text-justify 2xl:text-2xl mb-16 px-8">
                Thinking about studying abroad but unsure where to start? Our expert counselors are here to help! Whether you're exploring universities, courses, or visa requirements, we offer personalized guidance to make your dream a reality.
            </p>
            <button className="mt-4 bg-red-500 text-white 2xl:text-2xl p-2 md:px-3 md:py-2 rounded-md hover:bg-red-600 w-fit">
                Book an Appointment
            </button>
            </div>
        </div>

    </section>
  )
}

export default CounselorSection