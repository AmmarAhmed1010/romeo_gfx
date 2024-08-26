"use client";
import React from "react";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";

const FlipText = () => {
    const words = ["Animation", "Styling"];

    // Animation variants for scroll effects
    const scrollVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
    };

    return (
        <motion.div
            className="text-xl 2xl:text-5xl lg:text-3xl font-serif text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollVariants}
        >
            I specialize in <FlipWords words={words} /> <br />
        </motion.div>
    );
}

export default FlipText;
