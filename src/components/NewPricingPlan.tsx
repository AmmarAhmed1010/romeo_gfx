"use client"
import React from 'react';
import { motion } from 'framer-motion';

const NewPricingPlan = () => {

  const whatsappNumber = '03158552233'; // Replace with your WhatsApp number
  const contactMessage = "Hello, I'm interested in your services.";

  // Scroll reveal animation variants
  const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full flex justify-center h-full py-16 bg-black">
      <div className="font-serif px-4 max-w-7xl bg-black">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center tracking-wide">
          <span className="text-red-600">Pricing</span> Plan
        </h2>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariant}
            viewport={{ once: true }}
            className="border-gradient-animation shadow-lg rounded-3xl p-6"
          >
            <div className="content1 flex flex-col">
            <h1 className="text-2xl  font-bold text-white mb-4">Basic Plan</h1>
            <p className="text-lg font-semibold text-white">Starts at <span className="text-yellow-400">Rs: 1500</span></p>
            <ul className="text-white w-full mt-4 space-y-2">
              {['2 HD Thumbnail', '1 Logo', '1 Banner', '1 Non Animated Overlay'].map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              Choose Plan
            </a>
            </div>
          </motion.div>

          {/* Standard Plan */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariant}
            viewport={{ once: true }}
            className="border-gradient-animation text-center shadow-lg rounded-3xl p-6"
          >
              <div className="content1">
            <h1 className="text-2xl font-bold text-white mb-4">Standard Plan</h1>
            <p className="text-lg font-semibold text-white">Starts at <span className="text-yellow-400">Rs: 2300</span></p>
            <ul className="text-white mt-4 space-y-2">
              {['2 HD Thumbnail', '1 Logo', '1 Banner', '1 Professional Animated Overlay'].map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              Choose Plan
            </a>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariant}
            viewport={{ once: true }}
            className="border-gradient-animation text-center bg-red-800 shadow-lg rounded-3xl p-6"
          >
            <div className="content1">
            <h1 className="text-2xl font-bold text-white mb-4">Premium Plan</h1>
            <p className="text-lg font-semibold text-white">Starts at <span className="text-yellow-400">Rs: 2800</span></p>
            <ul className="text-white mt-4 space-y-2">
              {['3 HD Thumbnail', '1 Logo', '1 Banner', '1 Professional Overlay'].map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              Choose Plan
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewPricingPlan;
