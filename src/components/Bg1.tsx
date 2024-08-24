"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import LogoNew from "./LogoNew";
import GenerateText from "./GenerateText";
import FlipText from "./FlipText";

const Bg1 = () => {
  const handleClick = () => {
    const phoneNumber = "03158552233"; // Replace with your WhatsApp number including country code
    const message = encodeURIComponent(
      "Hello, I'm interested in your services."
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="h-screen w-full bg-black relative flex">
      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row xl:px-36 lg:px-24 md:px-16 sm:px-8 xl:mb-24 lg:mb-20 md:mb-16 sm:mb-12 items-center justify-between w-full">
        {/* Flex container with reverse column direction on mobile */}
        <div className="flex flex-col px-4 py-4 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-16 items-start">
          {/* Content on the left side */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold py-2 md:py-6 lg:py-8 xl:py-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-white">
            <span className="text-white">I Am</span>{" "}
            <span className="">RomeoGFX</span>
          </div>
          <div>
            <FlipText />
          </div>
          <div className="text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg my-2 relative z-10">
            <GenerateText />
          </div>
          <button
            onClick={handleClick}
            className="bg-red-700 text-white rounded-2xl mt-2 py-1 px-4 hover:bg-red-800 transition"
          >
            Hire Me
          </button>
        </div>
        <div className="flex shrink-0 mt-8 sm:mt-0 md:mt-8 lg:mt-8 xl:ml-8">
          {/* Logo on the right side */}
          <LogoNew />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Bg1;
