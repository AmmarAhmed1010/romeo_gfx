"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

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

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false,    // Animation should trigger each time the element scrolls into view
       // Offset to trigger animations earlier or later
    });
  }, []);

  return (
    <section className="w-full h-full px-4 md:px-8 lg:px-20 py-10 bg-black">
      <div className="mx-auto font-serif">
        {/* Section heading */}
        <div data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-medium font-serif text-white mb-12 text-center tracking-wide">
            Our <span className="text-red-600 text-3xl md:text-4xl font-medium font-serif">Price</span> List
          </h2>
        </div>

        {/* Pricing items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up-right" // AOS zoom-in-up effect
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewPricingSection;
