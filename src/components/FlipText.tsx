import React from "react";
import { FlipWords } from "./ui/flip-words";
 
const FlipText = () => {
    const words = ["Desingning", "Animation"];
 
    return (
        <div className="text-3xl mx-auto font-normal text-white">
        I specialize in
          <FlipWords words={words} /> <br />
        </div>
    );
  }
  
export default FlipText
