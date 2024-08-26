"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import GenerateText from "./GenerateText";
import FlipText from "./FlipText";
import Image from "next/image";
import { motion } from 'framer-motion';

const BgNew = () => {
    const whatsappNumber = '03158552233'; // Replace with your WhatsApp number
    const contactMessage = "Hello, I'm interested in your services.";

    // Define animation variants
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
    };

    return (
        <div className="h-full 2xl:h-screen bg-black w-full">
            <BackgroundBeams />
            {/* Header */}
            <motion.div
                className="text-white text-3xl 2xl:text-4xl font-serif 2xl:justify-start 2xl:px-20 flex justify-center py-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUpVariants}
            >
                <h1>Romeo</h1>
                <span className="text-red-700">GFX</span>
            </motion.div>
            {/* Main */}
            <motion.div
                className="flex flex-col-reverse lg:flex-row 2xl:h-full lg:px-10 2xl:px-20 2xl:pb-20 2xl:flex-row 2xl:items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUpVariants}
            >
                {/* DivLeft */}
                <motion.div
                    className="w-full 2xl:gap-3 2xl:w-1/2 lg:w-1/2 flex flex-col py-4 px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUpVariants}
                >
                    <motion.div
                        className="flex gap-2 2xl:gap-3 mb-2 2xl:text-7xl lg:text-5xl text-3xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUpVariants}
                    >
                        <h1 className="text-white font-serif">I Am</h1>
                        <span className="font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-white">
                            RomeoGFX
                        </span>
                    </motion.div>
                    <div>
                        <FlipText />
                    </div>
                    <div>
                        <GenerateText />
                    </div>
                    <motion.div
                        className="my-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUpVariants}
                    >
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
                        >
                            Hire Me
                        </a>
                    </motion.div>
                </motion.div>
                {/* DivRight */}
                <motion.div
                    className="w-full 2xl:w-1/2 lg:w-1/2 my-4 flex justify-center pb-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUpVariants}
                >
                    <Image
                        src="/imgprofile.png"
                        alt="Profile Image"
                        className="rounded-[50%] lg:w-[350px] lg:h-[350px] 2xl:w-[400px] 2xl:h-[400px] img"
                        width={280} // Base size for mobile
                        height={280}
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default BgNew;
