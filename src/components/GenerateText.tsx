"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
 
const words = `I am Romeo GFX, a passionate and dedicated graphic designer from Pakistan with over three years of experience in the field. My expertise lies in creating compelling YouTube thumbnails that not only capture attention but also encourage viewers to engage with the content. Whether you are a YouTuber or a business owner, my goal is to elevate your visual presence and bring your ideas to life with creative and impactful designs.`;
 
const GenerateText = () => {
    return <TextGenerateEffect words={words} />;
}
export default GenerateText
