"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import LogoNew from "./LogoNew";
import GenerateText from "./GenerateText";
import FlipText from "./FlipText";
import Image from "next/image";

const BgNew = () => {
    const whatsappNumber = '03158552233'; // Replace with your WhatsApp number
  const contactMessage = "Hello, I'm interested in your services.";


    return (
        <>
            <div className="h-full 2xl:h-screen bg-black w-full">
                <BackgroundBeams />
                {/* Header */}
                <div className="text-white text-3xl 2xl:text-4xl font-serif 2xl:justify-start 2xl:px-20 flex justify-center py-4">
                    <h1>Romeo</h1><span className="text-red-700">GFX</span>
                </div>
                {/* Main */}
                <div className="flex flex-col-reverse lg:flex-row 2xl:h-full lg:px-10 2xl:px-20 2xl:pb-20 2xl:flex-row 2xl:items-center">
                    {/* DivLeft */}
                    <div className="w-full 2xl:gap-3 2xl:w-1/2 lg:w-1/2 flex flex-col py-4 px-4">
                        <div className="flex gap-2 2xl:gap-3 mb-2 2xl:text-7xl lg:text-5xl text-3xl">
                            <h1 className="text-white font-serif">I Am</h1>
                            <span className="font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-white">RomeoGFX</span>
                        </div>
                        <div>
                            <FlipText />
                        </div>
                        <div>
                
                                <GenerateText />
                            
                        </div>
                        <div>
                        <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 my-4 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
              >
                Hire Me
              </a>
                        </div>
                    </div>
                    {/* DivRight */}
                    <div className="w-full 2xl:w-1/2 lg:w-1/2 my-4 flex justify-center pb-2">
                        <Image
                            src="/imgprofile.png"
                            alt="Profile Image"
                            className="rounded-[50%] lg:w-[350px] lg:h-[350px] 2xl:w-[400px] 2xl:h-[400px] shadow-[0_0_10px_2px_rgba(255,0,0,0.6)]"
                            width={280} // Base size for mobile
                            height={280}
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BgNew;
