import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Image from 'next/image'; // Import Next.js Image component

const Featuring = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true,     // Animation should happen only once
        });
    }, []);

    return (
        <div className="w-full h-auto bg-black px-4 md:px-8 lg:px-20 py-10">
            <div data-aos="zoom-in" className="heading w-full flex justify-center items-center md:text-4xl text-3xl font-bold text-white font-serif mb-12">
                <h1 className="mr-2">Featured</h1>
                <span className="text-red-700">Thumbnails</span>
            </div>

            <div className="content grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                <div data-aos="fade-up-right" className="w-full h-auto shadow-lg">
                    <Image
                        src="/feature/feature1.png"
                        alt="Thumbnail 1"
                        width={500}
                        height={500}
                        className="w-full h-auto border-gradient-animation3"
                    />
                </div>
                <div data-aos="fade-up-right" className="w-full h-auto shadow-lg">
                    <Image
                        src="/feature/feature11.png"
                        alt="Thumbnail 2"
                        width={500}
                        height={500}
                        className="w-full h-auto border-gradient-animation3"
                    />
                </div>
                <div data-aos="fade-up-right" className="w-full h-auto shadow-lg">
                    <Image
                        src="/feature/feature3.png"
                        alt="Thumbnail 3"
                        width={500}
                        height={500}
                        className="w-full h-auto border-gradient-animation3"
                    />
                </div>
                <div data-aos="fade-up-right" className="w-full h-auto shadow-lg">
                    <Image
                        src="/feature/feature4.png"
                        alt="Thumbnail 4"
                        width={500}
                        height={500}
                        className="w-full h-auto border-gradient-animation3"
                    />
                </div>
                <div data-aos="fade-up-right" className="w-full h-auto shadow-lg">
                    <Image
                        src="/feature/feature5.png"
                        alt="Thumbnail 5"
                        width={500}
                        height={500}
                        className="w-full h-auto border-gradient-animation3"
                    />
                </div>
                <div data-aos="fade-up-right" className="w-full h-auto shadow-lg">
                    <Image
                        src="/feature/feature12.png"
                        alt="Thumbnail 6"
                        width={500}
                        height={500}
                        className="w-full h-auto border-gradient-animation3"
                    />
                </div>
                <div data-aos="fade-up-right" className="w-full h-auto shadow-lg">
                    <Image
                        src="/feature/feature7.png"
                        alt="Thumbnail 7"
                        width={500}
                        height={500}
                        className="w-full h-auto border-gradient-animation3"
                    />
                </div>
                <div className="hidden md:flex w-full h-auto shadow-lg">
                    <Image
                        data-aos="fade-up-right"
                        src="/feature/feature12.png"
                        alt="Thumbnail 8"
                        width={500}
                        height={500}
                        className="w-full h-auto border-gradient-animation3"
                    />
                </div>
                <div data-aos="fade-up-right" className="w-full h-auto shadow-lg">
                    <Image
                        src="/feature/feature9.png"
                        alt="Thumbnail 9"
                        width={500}
                        height={500}
                        className="w-full h-auto border-gradient-animation3"
                    />
                </div>
            </div>
        </div>
    );
};

export default Featuring;
