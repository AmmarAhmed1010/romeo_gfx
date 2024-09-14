"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Image from 'next/image'; // Import Next.js Image component

const Page = () => { // Component name should be capitalized
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true,     // Animation should happen only once
        });
    }, []);

    // Generate 18 zombie image paths
    const zombieImages = Array.from({ length: 18 }, (_, i) => `/zombie/zombie${i + 1}.png`);

    return (
        <div className="w-full bg-black px-4 md:px-8 lg:px-20 py-20">
            {/* Heading Section */}
            <div data-aos="zoom-in" className="heading w-full flex justify-center font-serif items-center md:text-4xl text-3xl font-bold text-white mb-12">
                <h1 className="mr-2">Zombie</h1>
                <span className="text-green-500">Thumbnails</span>
            </div>

            {/* Thumbnails Grid */}
            <div data-aos="fade-up-right" className="content grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {zombieImages.map((src, index) => (
                    <div key={index} className="w-full h-auto shadow-lg">
                        <Image
                            src={src}
                            alt={`Zombie ${index + 1}`}
                            width={500}
                            height={500}
                            className="w-full h-auto border-gradient-animation3 rounded-lg"
                            priority={index < 4} // Prioritize first few images for faster loading
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
