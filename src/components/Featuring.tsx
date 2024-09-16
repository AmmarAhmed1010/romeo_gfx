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

    const images = [
        "/feature/feature1.png",
        "/feature/feature11.png",
        "/feature/feature3.png",
        "/feature/feature4.png",
        "/feature/feature5.png",
        "/feature/feature12.png",
        "/feature/feature7.png",
        "/feature/feature2.png",
        "/feature/feature9.png"
    ];

    return (
        <div className="w-full bg-black px-4 md:px-8 lg:px-20 py-10">
            <div data-aos="zoom-in" className="heading w-full flex justify-center items-center text-white mb-12">
                <h1 className="mr-2 text-3xl md:text-4xl font-medium font-serif">Featured</h1>
                <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">Thumbnails</span>
            </div>

            <div className="content grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {images.slice(0, 8).map((src, index) => (
                    <div
                        key={index}
                        data-aos="fade-up-right"
                        className="w-full h-auto shadow-lg"
                    >
                        <div className="relative w-full h-0 pb-[50%] overflow-hidden">
                            <Image
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                fill // Replaces layout="fill"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop
                                className="border-gradient-animation3" // Use Tailwind's object-cover
                            />
                        </div>
                    </div>
                ))}
                {/* Conditionally render the 9th image only for medium and larger screens */}
                <div
                    data-aos="fade-up-right"
                    className="w-full h-auto shadow-lg hidden md:block"
                >
                    <div className="relative w-full h-0 pb-[50%] overflow-hidden">
                        <Image
                            src={images[8]}
                            alt="Thumbnail 9"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="border-gradient-animation3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featuring;
