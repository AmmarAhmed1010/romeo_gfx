"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import LogoNew from "./LogoNew";
import GenerateText from "./GenerateText";
import FlipText from "./FlipText";
import Image from "next/image";

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
    <>
    <header className="w-full bg-black font-serif font-bold text-center lg:text-left text-white px-20 py-8 text-3xl">
    Romeo<span className="text-red-700">GFX</span>
    </header>
    <div className="h-full w-full bg-black relative flex ">
      <div className="flex h-screen flex-col-reverse space-y-2 items-center w-full justify-between">
        {/* Flex container with reverse column direction on mobile */}
        <div className="flex flex-col mb-28 items-start">
          {/* Content on the left side */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold  md:py-6 lg:py-8 xl:py-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-white">
            <span className="text-white">I Am</span>{" "}
            <span className="">RomeoGFX</span>
          </div>
          <div>
            <FlipText />
          </div>
          <div className="text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg relative z-10">
            <GenerateText />
          </div>
          <button
            onClick={handleClick}
            className="bg-red-700 text-white rounded-2xl mt-2 py-1 px-4 hover:bg-red-800 transition"
          >
            Hire Me
          </button>
        </div>
        <div className="relative">
  <Image
    src="/imgprofile.png"
    alt="Profile Image"
    className="rounded-[50%] shadow-[0_0_10px_2px_rgba(255,0,0,0.6)] transition-shadow duration-500"
    width={300}
    height={300}
  />
</div>

      </div>
      <BackgroundBeams />
    </div>
    </>
  );
};

export default Bg1;
