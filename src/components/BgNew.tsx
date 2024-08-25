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
            <div className="h-full w-full bg-black">
                <BackgroundBeams />

                {/* Header */}
                <div className="w-full py-4 flex text-3xl justify-center text-white">
                    <h1>Romeo</h1><span className="text-red-700">GFX</span>
                </div>
                {/* Main */}
                <div className="w-full h-screen flex flex-col-reverse">
                    {/* DivLeft */}
                    <div className="w-full flex flex-col py-4 px-4">
                        <div className="flex gap-1 mb-2 text-3xl">
                            <h1 className="text-white">I Am</h1><span className="font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-white">RomeoGFX</span>
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
                    <div className="w-full flex justify-center pb-2">
                        <Image
                            src="/imgprofile.png"
                            alt="Profile Image"
                            className="rounded-[50%] shadow-[0_0_10px_2px_rgba(255,0,0,0.6)]"
                            width={280} // Adjusted size for better view on smaller screens
                            height={280}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BgNew
