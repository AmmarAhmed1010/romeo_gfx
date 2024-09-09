"use client";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

const CardsDesign = () => {
  const whatsappNumber = '03158552233'; // Replace with your WhatsApp number
  const contactMessage = "Hello, I'm interested in your services.";

  useEffect(() => {
    AOS.init({ duration: 1000}); // Initialize AOS with a 1-second animation
  }, []);

  return (
    <div className='flex bg-black flex-col w-full'>
      <div
       data-aos="fade-right" 
      className='text-center'>
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white font-sans mb-8 text-center">
         Our <span className="text-red-700">Pricing</span> Plan
        </h2>
      </div>

      <div className="flex flex-col md:flex-row font-serif justify-center items-center space-y-8 md:space-y-0 md:space-x-4 p-4">
        {/* Card 1 */}
        <div 
          data-aos="fade-right" // Scroll reveal animation
          className="border-gradient-animation shadow-lg rounded-3xl p-6 max-w-sm w-full"
        >
          <div className="content2">
            <div className='w-full text-center'>
          <span className="font-serif text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500  to-yellow-500">
  Basic Plan
</span>
</div>

          <div className='flex items-center gap-2'>
            <h4 className='text-xl text-white'>Starts at</h4>
            <span className='text-2xl font-bold text-red-700'>Rs: 1500</span>
          </div>
          <div className="content text-white space-y-2 my-4">
            {[
              '2 HD Thumbnail',
              '1 Logo',
              '1 Banner',
              '1 Non Animated Overlay'
            ].map((item, index) => (
              <h4 className="flex items-center" key={index}>
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </h4>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
            >
              Choose Plan
            </a>
          </div>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          data-aos="fade-right"
          className="border-gradient-animation shadow-lg rounded-3xl p-6 max-w-sm w-full"
        >
          <div className="content2">
          <h1 className="text-center text-white text-2xl font-bold">
            Standard Plan
          </h1>
          <div className='flex items-center gap-2'>
            <h4 className='text-xl text-white'>Starts at</h4>
            <span className='text-2xl font-bold text-red-700'>Rs: 2300</span>
          </div>
          <div className="content text-white space-y-2 my-4">
            {[
              '2 HD Thumbnail',
              '1 Logo',
              '1 Banner',
              '1 Professional Animated Overlay'
            ].map((item, index) => (
              <h4 className="flex items-center" key={index}>
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </h4>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
            >
              Choose Plan
            </a>
          </div>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          data-aos="fade-right"
          className="border-gradient-animation shadow-lg rounded-3xl p-6 max-w-sm w-full"
        >
          <div className="content2">
          <h1 className="text-center text-white text-2xl font-bold">
            Premium Plan
          </h1>
          <div className='flex items-center gap-2'>
            <h4 className='text-xl text-white'>Starts at</h4>
            <span className='text-2xl font-bold text-red-700'>Rs: 2800</span>
          </div>
          <div className="content text-white space-y-2 my-4">
            {[
              '3 HD Thumbnail',
              '1 Logo',
              '1 Banner',
              '1 Professional Overlay'
            ].map((item, index) => (
              <h4 className="flex items-center" key={index}>
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </h4>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg inline-block text-center"
            >
              Choose Plan
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDesign;
