import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Image from 'next/image'; // Import Next.js Image component

const Featuring = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,  // Duration of the animation
            easing: 'ease-in-out', // Add easing for smoother animations
            once: true,     // Ensure animations happen only once
        });
        AOS.refresh(); // Refresh AOS to handle potential issues with dynamic content
    }, []);
    return (
        <div className="w-full bg-black px-4 md:px-8 lg:px-20 py-10">
            <div data-aos="zoom-in" className="heading w-full flex justify-center items-center text-white mb-12">
                <h1 className="mr-2 text-3xl md:text-4xl font-medium font-serif">Featured</h1>
                <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">Thumbnails</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6  md:gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <Image
             src={`/feature/feature${index + 1}.png`}
              alt={`Zombie thumbnail ${index + 1}`}
              height={500}
              width={500}
              className="rounded-xl object-cover w-full h-auto border-gradient-animation3" // Make sure it's responsive
            />
          </div>
        ))}
      </div>
        </div>
    );
};

export default Featuring;
