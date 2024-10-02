import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ZombieNew = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true,     // Animation should happen only once
        });
        AOS.refresh(); // Refresh AOS animations
    }, []);

    const featuringImages = [
        '/feature/feature1.png',  // Replace these paths with your actual image paths
        '/feature/feature2.png',
        '/feature/feature4.png',
        '/feature/feature5.png',
        '/feature/feature6.png',
        '/feature/feature7.png'
    ];

    const zombieImages = [
        '/zombie/zombie1.png',  // Replace these paths with your actual image paths
        '/zombie/zombie2.png',
        '/zombie/zombie3.png',
        '/zombie/zombie4.png',
        '/zombie/zombie5.png',
        '/zombie/zombie6.png'
    ];
  return (
    <div className="w-full bg-black px-4 md:px-8 lg:px-20 pt-10">
    {/* Featuring Section */}
    <div className="w-full mb-12">
    <div data-aos="zoom-in" className="heading w-full flex justify-center items-center text-white mb-12">
            <h1 className="mr-2 text-3xl md:text-4xl font-medium font-serif">Featured</h1>
            <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">Thumbnails</span>
        </div>

        {/* Grid for Featuring Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {featuringImages.map((image, index) => (
                <div key={index} className="w-full h-full relative overflow-hidden rounded-lg">
                    <Image
                        src={image}
                        alt={`Featuring image ${index + 1}`}
                        width={500}
                        height={500}
                        className="object-cover w-full border-gradient-animation3 h-auto rounded-lg"
                    />
                </div>
            ))}
        </div>
    </div>

    {/* Zombie Section */}
    <div className="w-full mb-12">
    <div data-aos="zoom-in" className="heading w-full flex justify-center items-center text-white mb-12">
            <h1 className="mr-2 text-3xl md:text-4xl font-medium font-serif">Zombie</h1>
            <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">Thumbnails</span>
        </div>

        {/* Grid for Zombie Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {zombieImages.map((image, index) => (
                <div key={index} className="w-full h-full relative overflow-hidden rounded-lg">
                    <Image
                        src={image}
                        alt={`Zombie image ${index + 1}`}
                        width={500}
                        height={500}
                        className="object-cover w-full h-auto rounded-lg border-gradient-animation3"
                    />
                </div>
            ))}
        </div>
    </div>

    {/* Button to view all images */}
    <div className="w-full flex justify-center mt-12">
        <Link href="/zombie_thumbnail">
            <div className="bg-red-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition-all">
                View All Images
            </div>
        </Link>
    </div>
</div>
);
};



export default ZombieNew
