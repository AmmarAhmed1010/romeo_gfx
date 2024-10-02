"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import framer-motion for animations

const NewPricingSection = () => {
  const items = [
    { title: "Thumbnail Design", price: "300", description: "Thumbnails for your videos." },
    { title: "Logo Design", price: "500", description: "Professional logos for your brand." },
    { title: "Banner Design", price: "600", description: "Custom banners for any platform." },
    { title: "Overlay Design", price: "800 / 1800", description: "Perfect overlays for your streams." },
    { title: "Posters", price: "1000", description: "Stunning posters for promotions." },
    { title: "FB Banner", price: "800", description: "Custom Facebook banners." },
    { title: "Intro / Outro", price: "800", description: "Professional video intros/outros." },
    { title: "Jersey Shirts", price: "2000", description: "Custom jerseys for your team." },
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-20 py-10 bg-black">
      <div className="mx-auto font-serif">
        {/* Section heading with framer-motion */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Initial state for the heading
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }} // Animate to visible state
        >
          <h2 className="text-3xl md:text-4xl font-medium font-serif text-white mb-12 text-center tracking-wide">
            Our <span className="text-red-600 text-3xl md:text-4xl font-medium font-serif">Price</span> List
          </h2>
        </motion.div>

        {/* Pricing items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const ref = useRef(null); // Create a ref to track the visibility
            const inView = useInView(ref, { once: true }); // Check if the component is in view

            return (
              <motion.div
                key={index}
                ref={ref} // Attach the ref to the motion div
                initial={{ opacity: 0, y: 50 }} // Initial state before being in view
                animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } } : {}} // Animate based on visibility
                className="border-gradient-animation text-center"
              >
                {/* Inner content container */}
                <div className="content2 w-full h-full">
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500  to-yellow-500 mb-3">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-lg text-gray-300 mb-2">
                    {item.description}
                  </p>
                  
                  {/* Price */}
                  <p className="text-xl md:text-2xl font-bold text-red-700">
                    <span className='text-white'>Rs:</span> {item.price}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewPricingSection;
