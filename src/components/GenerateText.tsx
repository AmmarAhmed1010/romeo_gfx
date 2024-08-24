"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
 
const words = `I am Romeo GFX a dedicated graphic designer from Pakistan with over three years of experience I specialize in creating eye-catching YouTube thumbnails that engage viewers My goal is to enhance your visual presence with creative and impactful designs`;
 
const GenerateText = () => {
    return <TextGenerateEffect words={words} />;
}
export default GenerateText
