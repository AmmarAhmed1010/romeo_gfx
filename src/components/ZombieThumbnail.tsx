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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  md:gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <Image
             src={`/zombie/zombie${index + 1}.png`}
              alt={`Zombie thumbnail ${index + 1}`}
              height={500}
              width={500}
              className="rounded-xl object-cover w-full h-auto" // Make sure it's responsive
            />
          </div>
        ))}
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
