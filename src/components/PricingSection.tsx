import React from 'react';

const PricingSection = () => {
  return (
    <section className="w-full h-full py-20 bg-black">
      <div className="mx-auto px-6 md:px-8">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white font-sans mb-12 text-center">
          Our <span className='text-red-700'>Price</span> List
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="bg-red-800 p-3 rounded-xl shadow-md text-center cursor-pointer relative"
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className="absolute inset-0 rounded-xl"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-3 relative z-10">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white mb-4 relative z-10">
                Perfect for YouTube and other platforms.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white relative z-10">
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
