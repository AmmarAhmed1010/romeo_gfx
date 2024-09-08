"use client";
import React from 'react';
import { motion } from 'framer-motion';
// import './NewPricingSection.css'; // Import CSS file for border animation


const NewPricingSection = () => {
  const items = [
    { title: "Thumbnail Design", price: "250", description: "Thumbnails for your videos." },
    { title: "Logo Design", price: "400", description: "Professional logos for your brand." },
    { title: "Banner Design", price: "450", description: "Custom banners for any platform." },
    { title: "Overlay Design", price: "500 / 1500", description: "Perfect overlays for your streams." },
    { title: "Posters", price: "700", description: "Stunning posters for promotions." },
    { title: "FB Banner", price: "500", description: "Custom Facebook banners." },
    { title: "Intro / Outro", price: "800", description: "Professional video intros/outros." },
    { title: "Jersey Shirts", price: "1200", description: "Custom jerseys for your team." },
  ];

  // Reveal animation when scrolling, runs one time
  const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        once: true,
      },
    },
  };

  return (
    <section className="flex justify-center w-full px-2 md:px-6 py-16 bg-black">
      <div className="font-serif px-4 w-full">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariant}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center tracking-wide">
            Our <span className="text-red-600">Price</span> List
          </h2>
        </motion.div>

        {/* Pricing items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={revealVariant}
              className="border-gradient-animation text-center"
            >
              {/* Inner content container */}
              <div className="content2">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-red-700 mb-3">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-lg text-gray-300 mb-2">
                  {item.description}
                </p>
                
                {/* Price */}
                <p className="text-xl md:text-2xl font-bold text-red-700">
                 <span className='text-white'>Rs:</span> {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewPricingSection;
