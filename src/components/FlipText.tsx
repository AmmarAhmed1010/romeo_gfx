"use client";
import React from "react";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";

const FlipText = () => {
    const words = ["Animation", "Styling"];

    // Animation variants for scroll effects
    const slideLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
      };
    return (
        <motion.div
            className="text-xl 2xl:text-5xl lg:text-3xl font-serif text-white"
            initial="hidden"
            whileInView="visible"
            variants={slideLeft}
        >
            I specialize in <FlipWords words={words} /> <br />
        </motion.div>
    );
}

export default FlipText;
