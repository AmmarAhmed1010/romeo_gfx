"use client";
import React, { useEffect } from "react";
import GenerateText from "./GenerateText";
import Image from "next/image";
import { motion } from 'framer-motion';
import AOS from 'aos';
import { FlipWords } from "./ui/flip-words";
import 'aos/dist/aos.css'; // Import AOS styles

const BgNew = () => {

    const words = ["Animation", "Styling"];

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: false,    // Animation should trigger each time the element scrolls into view
            offset: 100      // Offset to trigger animations earlier or later
        });
    }, []);

    const whatsappNumber = '03158552233'; // Replace with your WhatsApp number
    const contactMessage = "Hello, I'm interested in your services.";

    const slideLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };
    return (
        <div className="bg-black overflow-hidden lg:px-8  md:px-16">

            {/* Header */}

            <div
                data-aos="fade-up-right"
                className="text-white w-full text-3xl 2xl:text-5xl font-extrabold font-serif flex justify-center py-4"
            >
                <h1>Romeo</h1>
                <span className="text-red-700">GFX</span>
            </div>
            {/* Main */}
            <div className="flex flex-col-reverse lg:flex-row 2xl:h-full lg:px-10 2xl:pb-20 2xl:flex-row 2xl:items-center">
                {/* DivLeft */}
                <div className="2xl:gap-3 2xl:w-1/2 lg:w-1/2 flex flex-col py-4 px-4">
                    <div
                        data-aos="fade-up-right"
                        className="flex gap-2 2xl:gap-3 mb-2 2xl:text-7xl lg:text-5xl text-3xl"
                    >
                        <h1 className="text-white font-serif">I Am</h1>
                        <span className="font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-white">
                            RomeoGFX
                        </span>
                    </div>

                    <div data-aos="fade-up-right">
                        <div
                            className="text-xl 2xl:text-5xl lg:text-3xl font-serif text-white"
                        >
                            I specialize in <FlipWords words={words} /> <br />
                        </div>
                    </div>

                    <div
                        data-aos="fade-up-right"
                    >
                        <GenerateText />
                    </div>
                    <div
                        className="my-4"
                    >
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
                        >
                            Hire Me
                        </a>
                    </div>

                </div>
                {/* DivRight */}
                <div
  data-aos="fade-right"
  className="w-full lg:w-1/2  b md:justify-center py-2 pb-2 overflow-hidden"
>
  <div className="mx-auto w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] 2xl:w-[400px] 2xl:h-[400px]  relative">
    <Image
      src="/imgprofile.png"
      alt="Profile Image"
      className="border-gradient-animation2"
      layout="fill" // Ensures the image fills the container and scales with it
      objectFit="cover" // Ensures the image maintains aspect ratio and fills the container
      priority={true} // Loads image faster since it's likely above the fold
      sizes="(max-width: 768px) 200px, (max-width: 1024px) 350px, 400px"
    />
  </div>
</div>



            </div>
        </div>
    );
}

export default BgNew;
