"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import LogoNew from "./LogoNew";
import GenerateText from "./GenerateText";
import FlipText from "./FlipText";
import Image from "next/image";

const BgNew = () => {
  return (
   <>
   <div className="h-full w-full bg-black">
   <BackgroundBeams />

   {/* Header */}
   <div className="w-full text-center py-6 text-3xl text-white">
    <h1>RomeoGFX</h1>
   </div>
   {/* Main */}
   <div className="w-full h-screen flex flex-col-reverse">
     {/* DivLeft */}
    <div className="h-full flex justify-center px-8 py-2 text-white">
    <p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eum voluptatem sequi sint dolorum cupiditate, numquam sapiente sed perspiciatis veniam ad vitae? Architecto ducimus illo nemo reprehenderit impedit aut incidunt!

    </p>
    </div>
    {/* DivRight */}
    <div className="h-full flex justify-center py-4 items-center">
      <Image
              src="/imgprofile.png"
              alt="Profile Image"
              className="rounded-[50%] shadow-[0_0_10px_2px_rgba(255,0,0,0.6)] hover:shadow-[0_0_20px_10px_rgba(255,0,0,0.8)] transition-shadow duration-500"
              width={300} // Adjusted size for better view on smaller screens
              height={300}
            />
    </div>
   </div>
   </div>
   </>
  )
}

export default BgNew
