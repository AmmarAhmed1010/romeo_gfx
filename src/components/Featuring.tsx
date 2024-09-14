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
            <div data-aos="zoom-in" className="heading w-full flex justify-center items-center md:text-4xl text-3xl font-bold text-white font-serif mb-12">
                <h1 className="mr-2">Featured</h1>
                <span className="text-red-700">Thumbnails</span>
            </div>

            <div className="content grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {[
                    "/feature/feature1.png",
                    "/feature/feature11.png",
                    "/feature/feature3.png",
                    "/feature/feature4.png",
                    "/feature/feature5.png",
                    "/feature/feature12.png",
                    "/feature/feature7.png",
                    "/feature/feature12.png",
                    "/feature/feature9.png"
                ].map((src, index) => (
                    <div
                        key={index}
                        data-aos="fade-up-right"
                        className="w-full h-auto shadow-lg"
                    >
                        <div className="relative w-full h-0 pb-[50%] overflow-hidden">
                            <Image
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                layout="fill" // Ensures image fills the container
                                objectFit="cover" // Ensures image covers the space without distortion
                                className="border-gradient-animation3"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featuring;
