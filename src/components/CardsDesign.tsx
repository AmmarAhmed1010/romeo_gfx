"use client"
import React from 'react';
import { motion } from 'framer-motion';

const CardsDesign = () => {
  const whatsappNumber = '03158552233'; // Replace with your WhatsApp number
  const contactMessage = "Hello, I'm interested in your services.";

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };
  
  const slideUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className='h-full flex bg-black flex-col w-full'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUp}
        className='text-center'
      >
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white font-sans mb-8 text-center">
          <span className="text-red-700">Pricing</span> Plan
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row font-serif justify-center items-center space-y-8 md:space-y-0 md:space-x-4 p-4">
        {/* Card 1 */}
        <motion.div
         initial="hidden"
         whileInView="visible"
         variants={slideLeft}
          className="bg-red-800 shadow-lg rounded-3xl p-6 max-w-sm w-full"
        >
          <motion.div
            
          >
            <h1 className="text-center text-white text-2xl font-bold">
              Basic Plan
            </h1>
          </motion.div>
          <motion.div
           
            className='flex items-center gap-2'
          >
            <h4 className='text-xl text-white'>
              Starts at
            </h4>
            <span className='text-2xl font-bold text-yellow-400'>
              Rs: 1500
            </span>
          </motion.div>
          <motion.div
            
            className="content text-white space-y-2 my-4"
          >
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
          </motion.div>
          <motion.div
           
            className="w-full flex justify-center"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
            >
              Choose Plan
            </a>
          </motion.div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideLeft}
          className="bg-red-800 shadow-lg rounded-3xl p-6 max-w-sm w-full"
        >
          <motion.div
        
          >
            <h1 className="text-center text-white text-2xl font-bold">
              Standard Plan
            </h1>
          </motion.div>
          <motion.div
            
            className='flex items-center gap-2'
          >
            <h4 className='text-xl text-white'>
              Starts at
            </h4>
            <span className='text-2xl font-bold text-yellow-400'>
              Rs: 2300
            </span>
          </motion.div>
          <motion.div
        
            className="content text-white space-y-2 my-4"
          >
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
          </motion.div>
          <motion.div
           
            className="w-full flex justify-center"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
            >
              Choose Plan
            </a>
          </motion.div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
         initial="hidden"
         whileInView="visible"
         variants={slideLeft}
          className="bg-red-800 shadow-lg rounded-3xl p-6 max-w-sm w-full"
        >
          <motion.div
    
          >
            <h1 className="text-center text-white text-2xl font-bold">
              Premium Plan
            </h1>
          </motion.div>
          <motion.div
          
            className='flex items-center gap-2'
          >
            <h4 className='text-xl text-white'>
              Starts at
            </h4>
            <span className='text-2xl font-bold text-yellow-400'>
              Rs: 2800
            </span>
          </motion.div>
          <motion.div
           
            className="content text-white space-y-2 my-4"
          >
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
          </motion.div>
          <motion.div
          
            className="w-full flex justify-center"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg inline-block text-center"
            >
              Choose Plan
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardsDesign;
