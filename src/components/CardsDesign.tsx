"use client"
import React from 'react';
import { motion } from 'framer-motion';

const CardsDesign = () => {
  const whatsappNumber = '03158552233'; // Replace with your WhatsApp number
  const contactMessage = "Hello, I'm interested in your services.";

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  };

  return (
    <div className="flex bg-black flex-col md:flex-row font-serif justify-center items-center space-y-8 md:space-y-0 md:space-x-4 p-4">
      {/* Card 1 */}
      <motion.div
        className="bg-red-800 shadow-lg rounded-lg p-6 max-w-sm w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
      >
        <motion.h1
          className="text-center text-white text-2xl font-bold"
          variants={textVariants}
        >
          Basic Plan
        </motion.h1>
        <div className='flex items-center gap-2'>
          <motion.h4 className='text-xl text-white' variants={textVariants}>
            Starts at
          </motion.h4>
          <motion.span className='text-2xl font-bold text-yellow-400' variants={textVariants}>
            Rs: 1500
          </motion.span>
        </div>
        <div className="content text-white space-y-2 my-4">
          {[
            '2 HD Thumbnail',
            '1 Logo',
            '1 Banner',
            '1 Non Animated Overlay'
          ].map((item, index) => (
            <motion.h4
              className="flex items-center"
              key={index}
              variants={textVariants}
            >
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              {item}
            </motion.h4>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
          >
            Choose Plan
          </a>
        </div>
      </motion.div>

      {/* Repeat the same structure for Card 2 and Card 3 with different content */}
      <motion.div
        className="bg-red-800 shadow-lg rounded-lg p-6 max-w-sm w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
      >
        <motion.h1
          className="text-center text-white text-2xl font-bold"
          variants={textVariants}
        >
          Standard Plan
        </motion.h1>
        <div className='flex items-center gap-2'>
          <motion.h4 className='text-xl text-white' variants={textVariants}>
            Starts at
          </motion.h4>
          <motion.span className='text-2xl font-bold text-yellow-400' variants={textVariants}>
            Rs: 2300
          </motion.span>
        </div>
        <div className="content text-white space-y-2 my-4">
          {[
            '2 HD Thumbnail',
            '1 Logo',
            '1 Banner',
            '1 Professional Animated Overlay'
          ].map((item, index) => (
            <motion.h4
              className="flex items-center"
              key={index}
              variants={textVariants}
            >
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              {item}
            </motion.h4>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
          >
            Choose Plan
          </a>
        </div>
      </motion.div>

      <motion.div
        className="bg-red-800 shadow-lg rounded-lg p-6 max-w-sm w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
      >
        <motion.h1
          className="text-center text-white text-2xl font-bold"
          variants={textVariants}
        >
          Premium Plan
        </motion.h1>
        <div className='flex items-center gap-2'>
          <motion.h4 className='text-xl text-white' variants={textVariants}>
            Starts at
          </motion.h4>
          <motion.span className='text-2xl font-bold text-yellow-400' variants={textVariants}>
            Rs: 2800
          </motion.span>
        </div>
        <div className="content text-white space-y-2 my-4">
          {[
            '3 HD Thumbnail',
            '1 Logo',
            '1 Banner',
            '1 Professional Overlay'
          ].map((item, index) => (
            <motion.h4
              className="flex items-center"
              key={index}
              variants={textVariants}
            >
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              {item}
            </motion.h4>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
          >
            Choose Plan
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default CardsDesign;
