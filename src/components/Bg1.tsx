"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import LogoNew from "./LogoNew";
import GenerateText from "./GenerateText";
import FlipText from "./FlipText";
import Image from "next/image";

const Bg1 = () => {
  const handleClick = () => {
    const phoneNumber = "03158552233"; 
    const message = encodeURIComponent("Hello, I'm interested in your services.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <header className="w-full bg-black font-serif font-bold text-center lg:text-left text-white px-20 py-8 text-3xl">
        Romeo<span className="text-red-700">GFX</span>
      </header>
      <div className="h-full w-full bg-black relative  flex">
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
            <button
              onClick={handleClick}
              className="bg-red-700 text-white rounded-2xl py-2 px-6 hover:bg-red-800 transition"
            >
              Hire Me
            </button>
          </div>

          {/* Logo Section */}
          <div className="relative flex justify-center p-4 mt-4 overflow-hidden lg:mt-0">
            <LogoNew/>
            {/* <Image
              src="/imgprofile.png"
              alt="Profile Image"
              className="rounded-[50%] shadow-[0_0_10px_2px_rgba(255,0,0,0.6)] hover:shadow-[0_0_20px_10px_rgba(255,0,0,0.8)] transition-shadow duration-500"
              width={300} // Adjusted size for better view on smaller screens
              height={300}
            /> */}
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
};

export default Bg1;
