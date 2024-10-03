import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

// TypeScript interface for the ThumbnailSection component props
interface ThumbnailSectionProps {
    title: string;
    subtitle: string;
    imagesPath: string;
    totalImages: number;
    delayStart?: number; // Optional prop
}

// Reusable ThumbnailSection Component with types
const ThumbnailSection: React.FC<ThumbnailSectionProps> = ({ title, subtitle, imagesPath, totalImages, delayStart = 0 }) => {
    return (
        <>
            {/* Section Heading */}
            <div className="heading w-full flex justify-center items-center text-white my-10" data-aos="zoom-in">
                <h1 className="mr-2 text-3xl md:text-4xl font-medium font-serif">{title}</h1>
                <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">{subtitle}</span>
            </div>

            {/* Thumbnails Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
                {[...Array(totalImages)].map((_, index) => (
                    <div key={index} data-aos-delay={`${delayStart + index * 100}`}>
                        <Image
                            src={`${imagesPath}${index + 1}.png`}
                            alt={`${title} thumbnail ${index + 1}`}
                            height={500}
                            width={500}
                            className="rounded-xl object-cover w-full h-auto border-gradient-animation3"
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

const Thumbnail: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000,  offset: 50 });
        
    }, []);

    return (
        <div className="w-full bg-black px-4 md:px-8 lg:px-20 py-10">
            {/* Featured Section */}
            <ThumbnailSection
                title="Featured"
                subtitle="Thumbnails"
                imagesPath="/feature/feature"
                totalImages={6}
            />

            {/* Zombie Section */}
            <ThumbnailSection
                title="Zombie"
                subtitle="Thumbnails"
                imagesPath="/zombie/zombie"
                totalImages={6}
                delayStart={100}
            />

            {/* Link to View All Zombie Thumbnails */}
            <div className="w-full flex justify-center mt-12" data-aos="zoom-in">
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
