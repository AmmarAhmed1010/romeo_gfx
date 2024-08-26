"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <section className="w-full h-full py-20 bg-black">
      <div className="mx-auto px-6 md:px-8">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white font-sans mb-12 text-center">
          Our <span className="text-red-700">Price</span> List
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Thumbnail Design", price: "Rs: 250" },
            { title: "Logo Design", price: "Rs: 400" },
            { title: "Banner Design", price: "Rs: 450" },
            { title: "Overlay Design", price: "Rs: 500 / 1500" },
            { title: "Posters", price: "Rs: 700" },
            { title: "FB Banner", price: "Rs: 500" },
            { title: "Intro / Outro", price: "Rs: 800" },
            { title: "Joursey Shirts", price: "Rs: 1200" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-red-800 p-3 rounded-xl shadow-md text-center cursor-pointer relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariants}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-white mb-4 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariants}
              >
                Perfect for YouTube and other platforms.
              </motion.p>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariants}
              >
                {item.price}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
