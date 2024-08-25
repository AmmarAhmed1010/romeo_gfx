import React from "react";
import { FlipWords } from "./ui/flip-words";

const FlipText = () => {
    const words = ["Animation", "Styling"];

    return (
        <div className="text-xl 2xl:text-5xl lg:text-3xl font-serif text-white">
            I specialize in <FlipWords words={words} /> <br />
        </div>
    );
}

export default FlipText;
