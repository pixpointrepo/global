
/* eslint-disable */

const DocumentationScreen = () => {
  return (
    <section className='py-4 md:px-24 text-justify'>
        <div className="px-4 md:px-0">
            <h1 className="text-2xl text-center font-bold mb-2 ">Documentation</h1>
            <p>Preparing to study abroad involves more than just securing admission, it also requires meticulous preparation of academic, financial, and visa-related documents to meet immigration requirements. At Global Guidelines Consultancy & Migration Services, we provide end-to-end support to help students navigate the complex visa application process with ease.</p>
            <br/>
            <p>Our experienced team offers personalized guidance on preparing the necessary documents, including financial statements, academic transcripts, letters of intent, and more. We ensure that every detail is carefully reviewed to meet visa requirements and increase your chances of approval. From filling out visa forms to preparing for interviews, we're with you every step of the way, making your study abroad journey smooth and stress-free.</p>    
        </div>
        <div className="flex flex-col md:flex-row bg-[#626C95] my-4 p-4 md:p-16">
            <div className="flex flex-1">
                <img src="/assets/documentation.png" className="mx-auto w-[75%] object-contain " alt="" />
            </div>
            <div className="flex flex-1">
                    <div className="mx-auto mt-4 md:w-[90%] bg-white rounded-lg shadow-lg py-8 px-4 md:px-12 ">
                        <h2 className="text-2xl font-bold text-center mb-4">Connect With Us</h2>
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
        <div className="px-4 md:px-0">
            <p>At Global Guidelines Consultancy & Migration Services, we are committed to simplifying the visa application process for you. With our expert assistance and attention to detail, you can confidently prepare your academic and financial documents, ensuring your visa application is complete and accurate. Let us handle the complexities while you focus on your dreams — because your journey to study abroad starts with a successful visa application!</p>
        </div>
    </section>
  )
}

export default DocumentationScreen