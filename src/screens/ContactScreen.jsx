const ContactScreen = () => {
  return (
    <section id="Contact ">
      <div>
        <img
          src="/assets/UK-high.png"
          alt="Background"
          className=" w-full h-[650px] md:h-full object-cover"
        />
      </div>
      <div className="relative flex flex-col md:flex-row  3xl:text-2xl bg-[#626C95] md:px-20 py-6">
        <div className="flex flex-col flex-1 px-6 md:px-0 text-white ">
          <p className="mb-2">
            Walk into our office for a free consultation on visa process, test
            preparation, documentation, and more.
          </p>
          <p className="flex px-2 py-4 my-2 rounded-md gap-2  bg-white text-black font-medium">
            <span>🏠</span> Shiva Shakti Chowk, Old Baneshwor-09,
            Kathmandu-Nepal
          </p>
          <p className="flex px-2 py-4 my-2 rounded-md gap-2  bg-white text-black font-medium">
            <span>⏰</span> Sunday to Friday: 10 am to 5 pm <br />
            Saturday: Closed
          </p>
          <p className="flex px-2 py-4 my-2 rounded-md gap-2  bg-white text-black font-medium">
            <span>📧</span> info@ggcmc.com
          </p>
          <p className="flex px-2 py-4 my-2 rounded-md gap-2  bg-white text-black font-medium">
            <span>📞</span> +97715922461
          </p>
        </div>

        <div className="flex flex-1  3xl:text-2xl">
          <div className="w-[90%] md:w-[35%] 3xl:h-[600px]  bg-white absolute right-[5%] bottom-[120%] md:right-[8%] md:bottom-[8%] rounded-lg shadow-lg py-8 px-4 md:px-12 ">
            <h2 className="text-2xl font-bold text-center mb-4">
              Connect With Us
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="Your interested abroad location?"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="Your preferred time?"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <input
                type="text"
                placeholder="Education Level?"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default ContactScreen;
