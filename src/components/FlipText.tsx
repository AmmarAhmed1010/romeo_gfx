import React from "react";
import { FlipWords } from "./ui/flip-words";

const FlipText = () => {
    const words = ["Animation", "Styling"];

    return (
        <div className="text-xl lg:text-5xl font-normal text-white">
            I specialize in <FlipWords words={words} /> <br />
        </div>
    );
}

export default FlipText;
