import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link'; // Import Link for navigation

const ZombieThumbnail = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true,     // Animation should happen only once
        });
    }, []);

    const images = [
        "/zombie/zombie1.png",
        "/zombie/zombie4.png",
        "/zombie/zombie8.png",
        "/zombie/zombie2.png",
        "/zombie/zombie10.png",
        "/zombie/zombie15.png",
        "/zombie/zombie6.png",
        "/zombie/zombie16.png",
        "/zombie/zombie12.png"
    ];

    return (
        <div className="w-full bg-black px-4 md:px-8 lg:px-20 pt-10">
            <div data-aos="zoom-in" className="heading w-full flex justify-center items-center text-white mb-12">
                <h1 className="mr-2 text-3xl md:text-4xl font-medium font-serif">Zombie</h1>
                <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">Thumbnails</span>
            </div>
            <div className="content grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {images.slice(0, 8).map((src, index) => (
                    <div key={index} data-aos="fade-up-right" className="w-full h-auto shadow-lg">
                        <div className="relative w-full h-0 pb-[50%] overflow-hidden">
                            <Image
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                fill // New prop to replace layout="fill"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop for optimization
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

            {/* Button to view all thumbnails */}
            <div className="w-full flex justify-center mt-12">
                <Link href="/zombie_thumbnail">
                    <div className="bg-red-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition-all">
                        View All Thumbnails
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ZombieThumbnail;
