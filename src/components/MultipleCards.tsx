"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const MultipleCards = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    // <section className="w-full  h-screen">
      <div className="md:px-20 w-full bg-black 2xl-px-10 px-3">
        <h2 className="text-3xl sm:text-3xl md:text-5xl px-4 font-bold text-red-600 font-sans mb-2">
          <span className="text-white">Explore</span> My <span className="text-white">Media</span> Collection
        </h2>
        <div>
        <Carousel items={cards} />
        </div>
      </div>

    
  );
  
}

const DummyContent1 = () => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 my-5">
        {[...Array(15)].map((_, index) => (
          <Image
            key={index}
            src={`/gaming${index + 1}.png`}
            alt={`Gaming illustration ${index + 1}`}
            height="500"
            width="500"
            className="rounded-xl object-contain w-full h-full"
          />
        ))}
      </div>
    </div>
  );
};

const DummyContent2 = () => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 my-5">
        {[...Array(11)].map((_, index) => (
          <Image
            key={index}
            src={`/irl${index + 1}.png`}
            alt={`IRL illustration ${index + 1}`}
            height="500"
            width="500"
            className="rounded-xl object-contain w-full h-full"
          />
        ))}
      </div>
    </div>
  );
};

const DummyContent3 = () => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 my-5">
        {[...Array(11)].map((_, index) => (
          <Image
            key={index}
            src={`/logo${index + 1}.png`}
            alt={`Logo illustration ${index + 1}`}
            height="500"
            width="500"
            className="rounded-xl object-contain w-full h-full"
          />
        ))}
      </div>
    </div>
  );
};

const DummyContent4 = () => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 my-5">
        {[...Array(9)].map((_, index) => (
          <video
            key={index}
            src={`/vid${index + 1}.mp4`}
            controls
            height="500"
            width="500"
            className="rounded-xl object-contain w-full h-full"
          />
        ))}
      </div>
    </div>
  );
};


const data = [
  {
    category: "Gaming Thumbnails",
    title: "Click to see more",
    src: "/gaming1.png",
    content: <DummyContent1 />,
  },
  {
    category: "IRL Thumbnails",
    title: "Click to see more",
    src: "/irl1.png",
    content: <DummyContent2 />,
  },
  {
    category: "Logo Banner",
    title: "Click to see more",
    src: "/logo1.png",
    content: <DummyContent3 />,
  },
  {
    category: "Overlay",
    title: "Click to see more",
    src: "/imgprofile.png",
    content: <DummyContent4 />,
  },
];

export default MultipleCards;
