"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Image from 'next/image'; 

const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true,     // Animation happens only once
        });
    }, []);

    return (
        <div className="w-full h-full bg-black px-4 pb-8 md:px-8 lg:px-20 pt-10">
            {/* Heading Section */}
            <div data-aos="zoom-in" className="heading w-full flex justify-center items-center text-white mb-12">
                <h1 className="mr-2 text-3xl md:text-4xl font-medium font-serif">Zombie</h1>
                <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">Thumbnails</span>
            </div>

            {/* Image Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[...Array(18)].map((_, index) => (
                    <div
                        key={index}
                      
                        className="rounded-xl"
                    >
                        <Image
                            src={`/zombie/zombie${index + 1}.png`}
                            alt={`Zombie thumbnail ${index + 1}`}
                            height={500}
                            width={500}
                            className="rounded-xl object-cover w-full h-auto border-gradient-animation3" // Responsive image handling
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
