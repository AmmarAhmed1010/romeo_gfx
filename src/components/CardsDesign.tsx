import React from 'react'

const CardsDesign = () => {
    const whatsappNumber = '03158552233'; // Replace with your WhatsApp number
    const contactMessage = "Hello, I'm interested in your services.";

    return (
        <div className="flex bg-black flex-col md:flex-row font-serif justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-4">
          {/* Card 1 */}
          <div className="bg-red-800 shadow-lg rounded-lg p-6 max-w-sm w-full">
           <h1 className='text-center text-white text-2xl font-bold'>Basic Plan</h1>
           <div className='flex items-center gap-2'>
           <h4 className='text-xl text-white'>Starts at</h4><span className='text-2xl font-bold text-yellow-400'>Rs: 1500</span>
           </div>
           <div className="content text-white  space-y-2 my-4">
      <h4 className="flex items-center ">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        2 HD Thumbnail
      </h4>
      <h4 className="flex items-center">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        1 Logo
      </h4>
      <h4 className="flex items-center">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        1 Banner
      </h4>
      <h4 className="flex items-center">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        1 Non Animated Overlay
      </h4>
    </div>
           <div className="">
           <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
              >
                Choose Plan
              </a>
           </div>
          </div>
          {/* card2 */}
          <div className="bg-red-800 shadow-lg rounded-lg p-6 max-w-sm w-full">
           <h1 className='text-center text-white text-2xl font-bold'>Standard Plan</h1>
           <div className='flex items-center gap-2'>
           <h4 className='text-xl text-white'>Starts at</h4><span className='text-2xl font-bold text-yellow-400'>Rs: 2300</span>
           </div>
           <div className="content text-white  space-y-2 my-4">
      <h4 className="flex items-center ">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        2 HD Thumbnail
      </h4>
      <h4 className="flex items-center">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        1 Logo
      </h4>
      <h4 className="flex items-center">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        1 Banner
      </h4>
      <h4 className="flex items-center">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        1 Professiontal Animated Overlay
      </h4>
    </div>
           <div className="">
           <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
              >
                Choose Plan
              </a>
           </div>
          </div>
          {/* card3 */}
          <div className="bg-red-800 shadow-lg rounded-lg p-6 max-w-sm w-full">
           <h1 className='text-center text-white text-2xl font-bold'>Premium Plan</h1>
           <div className='flex items-center gap-2'>
           <h4 className='text-xl text-white'>Starts at</h4><span className='text-2xl font-bold text-yellow-400'>Rs: 2800</span>
           </div>
           <div className="content text-white  space-y-2 my-4">
      <h4 className="flex items-center ">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        3 HD Thumbnail
      </h4>
      <h4 className="flex items-center">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        1 Logo
      </h4>
      <h4 className="flex items-center">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        1 Banner
      </h4>
      <h4 className="flex items-center">
        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        1 Professiontal Overlay
      </h4>
    </div>
           <div className="">
           <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
              >
                Choose Plan
              </a>
           </div>
          </div>
        </div>
      );
    };
    
export default CardsDesign
