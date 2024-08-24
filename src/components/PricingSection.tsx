import React from 'react';

const PricingSection = () => {
  return (
    <section className="w-full h-full py-20 bg-black">
      <div className="mx-auto px-6 md:px-8">
        {/* Reduced max-width from 7xl to 6xl */}
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white font-sans mb-12 text-center">
          Our <span className='text-red-700'>Price</span> List
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Thumbnail Design", price: "Rs: 250", delay: "0" },
            { title: "Logo Design", price: "Rs: 400", delay: "100" },
            { title: "Banner Design", price: "Rs: 450", delay: "200" },
            { title: "Overlay Design", price: "Rs: 500 / 1500", delay: "300" },
            { title: "Posters", price: "Rs: 700", delay: "400" },
            { title: "FB Banner", price: "Rs: 500", delay: "500" },
            { title: "Intro / Outro", price: "Rs: 800", delay: "600" },
            { title: "Joursey Shirts", price: "Rs: 1200", delay: "700" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-red-800 p-4 rounded-3xl shadow-lg text-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-red-700"
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 transition-transform duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1">
                {item.title}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
                Perfect for YouTube and other platforms.
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
