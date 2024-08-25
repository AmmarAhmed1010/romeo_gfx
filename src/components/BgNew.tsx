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
                            <p>
                                <GenerateText />
                            </p>
                        </div>
                        <div>
                            <button 
                                onClick={handleClick}
                                className="bg-red-700 2xl:text-xl 2xl:px-6 2xl:py-2 text-white py-1 px-3 rounded-xl my-4">Hire Me</button>
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
