import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link'; // Import Link for navigation

const Thumbnail = () => {
    return (
        <div className="w-full bg-black px-4 md:px-8 lg:px-20 py-10">
            {/* Heading for the Featuring section */}
            <div className="heading w-full flex justify-center items-center text-white mb-12">
                <h1 className="mr-2 text-3xl md:text-4xl font-medium font-serif">Featured</h1>
                <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">Thumbnails</span>
            </div>

            {/* Featuring Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
                {[...Array(6)].map((_, index) => (
                    <div key={index}>
                        <Image
                            src={`/feature/feature${index + 1}.png`}
                            alt={`Feature thumbnail ${index + 1}`}
                            height={500}
                            width={500}
                            className="rounded-xl object-cover w-full h-auto border-gradient-animation3"
                        />
                    </div>
                ))}
            </div>

            {/* Heading for the Zombie Thumbnails section */}
            <div className="heading w-full flex justify-center items-center text-white mt-16 mb-12">
                <h1 className="mr-2 text-3xl md:text-4xl font-medium font-serif">Featured</h1>
                <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">Zombie Thumbnails</span>
            </div>

            {/* Zombie Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
                {[...Array(6)].map((_, index) => (
                    <div key={index}>
                        <Image
                            src={`/zombie/zombie${index + 1}.png`}
                            alt={`Zombie thumbnail ${index + 1}`}
                            height={500}
                            width={500}
                            className="rounded-xl object-cover w-full h-auto border-gradient-animation3"
                        />
                    </div>
                ))}
            </div>

            {/* Link to view all zombie thumbnails */}
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

export default Thumbnail;
