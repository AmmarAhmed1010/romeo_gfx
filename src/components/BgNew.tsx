"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import LogoNew from "./LogoNew";
import GenerateText from "./GenerateText";
import FlipText from "./FlipText";
import Image from "next/image";

const BgNew = () => {
    const handleClick = () => {
        const phoneNumber = "03158552233"; 
        const message = encodeURIComponent("Hello, I'm interested in your services.");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    return (
        <>
            <div className="h-full lg:h-screen bg-black w-full">
                <BackgroundBeams />

                {/* Header */}
                <div className="text-white text-3xl lg:justify-start lg:px-20 flex justify-center py-4">
                    <h1>Romeo</h1><span className="text-red-700">GFX</span>
                </div>
                
                {/* Main */}
                <div className="flex flex-col-reverse lg:h-full  lg:flex-row lg:items-center">
                    {/* DivLeft */}
                    <div className="w-full  lg:w-1/2 flex flex-col py-4 px-4">
                        <div className="flex gap-1 mb-2 lg:text-7xl text-3xl">
                            <h1 className="text-white">I Am</h1>
                            <span className="font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-white">RomeoGFX</span>
                        </div>
                        <div>
                            <FlipText />
                        </div>
                        <div>
                            <p>
                                <GenerateText />
                            </p>
                        </div>
                        <div>
                            <button 
                                onClick={handleClick}
                                className="bg-red-700 text-white py-1 px-3 rounded-xl my-4">Hire Me</button>
                        </div>
                    </div>

                    {/* DivRight */}
                    <div className="w-full lg:w-1/2 my-4 flex justify-center pb-2">
                        <Image
                            src="/imgprofile.png"
                            alt="Profile Image"
                            className="rounded-[50%] lg:w-[400px] lg:h-[400px] shadow-[0_0_10px_2px_rgba(255,0,0,0.6)]"
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
