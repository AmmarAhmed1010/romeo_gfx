"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import LogoNew from "./LogoNew";

const Bg1 = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-black relative flex items-center justify-center antialiased">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl mx-auto p-4"> 
        {/* Flex container with reverse column direction on mobile */}
        <div className="flex flex-col items-start"> 
          {/* Content on the left side */}
          <h1 className="relative text-white z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-serif font-bold">
            <span className="text-red-700">Romeo GFX</span>
          </h1>
          <p className="text-white max-w-lg my-2 text-sm relative z-10">
            I am Romeo GFX, a passionate and dedicated graphic designer from Pakistan with over three years of experience in the field. My expertise lies in creating compelling YouTube thumbnails that not only capture attention but also encourage viewers to engage with the content. Whether you are a YouTuber or a business owner, my goal is to elevate your visual presence and bring your ideas to life with creative and impactful designs.
          </p>
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
