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
    <div className="h-screen w-full bg-black relative flex items-center justify-center antialiased">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl mx-auto p-5 pr-3">
        {/* Flex container with reverse column direction on mobile */}
        <div className="flex flex-col items-start">
          {/* Content on the left side */}
          <div className="bg-clip-text text-4xl font-serif font-bold bg-no-repeat text-transparent bg-gradient-to-r py-4 from-yellow-500 via-red-500 to-white [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="text-white">I Am</span>{" "}
            <span className="">RomeoGFX</span>
          </div>
          <h1 className="relative text-white z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-serif font-bold">
            <FlipText />
          </h1>
          <p className="text-white max-w-lg my-2 text-sm relative z-10">
            <GenerateText />
          </p>
          <button
            onClick={handleClick}
            className="bg-red-700 text-white rounded-2xl mt-2 py-1 px-4"
          >
            Hire Me
          </button>
        </div>
        <div className="flex-shrink-0 mb-3">
          {/* Logo on the right side */}
          <LogoNew />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Bg1;
