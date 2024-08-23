import React from 'react';

const PricingSection = () => {
  return (
    <section className="w-full h-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold text-white font-sans mb-12 text-center">
          Our <span className='text-red-700'>Price</span> List
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-800 p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Thumbnail Design
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
              Perfect for YouTube and other platforms.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Rs: 250
            </p>
          </div>
          <div className="bg-red-800 p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Logo Design
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
              A professional logo for your brand.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Rs: 400
            </p>
          </div>
          <div className="bg-red-800 p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Banner Design
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
              Perfect for YouTube and other platforms.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Rs: 450
            </p>
          </div>
          <div className="bg-red-800 p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Overlay Design
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
              Perfect for YouTube and other platforms.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Rs: 500 / 1500
            </p>
          </div>
          <div className="bg-red-800 p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Posters
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
              Perfect for YouTube and other platforms.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Rs: 700
            </p>
          </div>
          <div className="bg-red-800 p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              FB Banner
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
              Perfect for YouTube and other platforms.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Rs: 500
            </p>
          </div>
          <div className="bg-red-800 p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Intro / Outro
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
              Perfect for YouTube and other platforms.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Rs: 800
            </p>
          </div>
          <div className="bg-red-800 p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Joursey Shirts
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
              Perfect for YouTube and other platforms.
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Rs: 1200
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
