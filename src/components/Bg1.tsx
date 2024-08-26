"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import LogoNew from "./LogoNew";
import GenerateText from "./GenerateText";
import FlipText from "./FlipText";
import Image from "next/image";

const Bg1 = () => {
  const whatsappNumber = '03158552233'; // Replace with your WhatsApp number
  const contactMessage = "Hello, I'm interested in your services.";

  return (
    <>
      <header className="w-full bg-black font-serif font-bold text-center lg:text-left text-white px-20 py-8 text-3xl">
        Romeo<span className="text-red-700">GFX</span>
      </header>
      <div className="h-screen w-full bg-black relative  flex">
        <div className="flex flex-col-reverse  lg:flex-row mb-10 items-center justify-between h-screen w-full px-4 lg:px-24 space-y-2 lg:space-y-0">
          {/* Content Section */}
          <div className="flex flex-col items-start lg:items-start text-center lg:text-left">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-white py-6">
              <span className="text-white">I Am</span>{" "}
              <span className="">RomeoGFX</span>
            </div>
            <FlipText />
            <div className="text-white text-start max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg my-4">
              <GenerateText />
            </div>
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
              >
                Choose Plan
              </a>
          </div>

          {/* Logo Section */}
          <div className="relative flex justify-center p-4 mt-4 overflow-hidden lg:mt-0">
            <LogoNew/>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
};

export default Bg1;
