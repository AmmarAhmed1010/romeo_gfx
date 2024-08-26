"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Define types for animation directions
type AnimationDirection = 'right' | 'left' | 'top' | 'bottom' | 'inside';

// Define the data item type with the animation property
interface PricingItem {
  title: string;
  price: string;
  animation: AnimationDirection;
}

// Animation variants for text entrance from different directions or from inside
const textVariants = {
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  },
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  },
  top: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  },
  bottom: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  },
  inside: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  },
};

const PricingSection = () => {
  // Data array with animation directions
  const items: PricingItem[] = [
    { title: "Thumbnail Design", price: "Rs: 250", animation: "right" },
    { title: "Logo Design", price: "Rs: 400", animation: "left" },
    { title: "Banner Design", price: "Rs: 450", animation: "top" },
    { title: "Overlay Design", price: "Rs: 500 / 1500", animation: "bottom" },
    { title: "Posters", price: "Rs: 700", animation: "inside" },
    { title: "FB Banner", price: "Rs: 500", animation: "right" },
    { title: "Intro / Outro", price: "Rs: 800", animation: "left" },
    { title: "Joursey Shirts", price: "Rs: 1200", animation: "top" },
  ];

  return (
    <section className="w-full h-full py-20 bg-black">
      <div className="mx-auto px-6 font-serif md:px-8">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white font-sans mb-12 text-center">
          Our <span className="text-red-700">Price</span> List
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-red-800 p-6 rounded-xl shadow-md text-center cursor-pointer relative moving-border"
            >
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariants[item.animation]}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-white mb-4 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariants[item.animation]}
              >
                Perfect for YouTube and other platforms.
              </motion.p>
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariants[item.animation]}
              >
                {item.price}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
