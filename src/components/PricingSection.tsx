"use client";
import React from 'react';
import { motion } from 'framer-motion';
const PricingSection = () => {
  // Data array with animation directions
  const items = [
    { title: "Thumbnail Design", price: "Rs: 250", animation: "right" },
    { title: "Logo Design", price: "Rs: 400", animation: "left" },
    { title: "Banner Design", price: "Rs: 450", animation: "top" },
    { title: "Overlay Design", price: "Rs: 500 / 1500", animation: "bottom" },
    { title: "Posters", price: "Rs: 700", animation: "inside" },
    { title: "FB Banner", price: "Rs: 500", animation: "right" },
    { title: "Intro / Outro", price: "Rs: 800", animation: "left" },
    { title: "Joursey Shirts", price: "Rs: 1200", animation: "top" },
  ];

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };
  
  const slideUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="w-full h-full py-20 bg-black">
      <div className="mx-auto px-6 font-serif md:px-8">
      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={slideUp}
                        
                      
                    >
                         
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white font-sans mb-12 text-center">
          Our <span className="text-red-700">Price</span> List
        </h2>
                    </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
          
             key={index}
              className="bg-red-800 p-6 rounded-xl shadow-md text-center cursor-pointer relative moving-border"
          
        > 
        <motion.div
  initial="hidden"
  whileInView="visible"
  variants={slideLeft}
>
  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 relative z-10">
    {item.title}
  </h3>
</motion.div>

<motion.div
  initial="hidden"
  whileInView="visible"
  variants={slideLeft}
>
  <p className="text-base sm:text-lg md:text-xl text-white mb-4 relative z-10">
    Perfect for YouTube and other platforms.
  </p>
  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 relative z-10">
    {item.price}
  </p>
</motion.div>




        </motion.div>
           
           
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
