"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const MultipleCards = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full bg-black h-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-red-700 font-sans mb-8">
          Explore My Media Collection
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
  
}

const DummyContent1 = () => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4">
      <div className="flex gap-9 my-5 flex-col">
        {[...Array(15)].map((_, index) => (
          <Image
            key={index}
            src={`/gaming${index + 1}.png`}
            alt={`Gaming illustration ${index + 1}`}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 rounded-xl h-full w-full mx-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

const DummyContent2 = () => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4">
      <div className="flex gap-9 my-5 flex-col">
        {[...Array(11)].map((_, index) => (
          <Image
            key={index}
            src={`/irl${index + 1}.png`}
            alt={`Gaming illustration ${index + 1}`}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 rounded-xl h-full w-full mx-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

const DummyContent3 = () => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4">
      <div className="flex gap-9 my-5 flex-col">
        {[...Array(11)].map((_, index) => (
          <Image
            key={index}
            src={`/logo${index + 1}.png`}
            alt={`Gaming illustration ${index + 1}`}
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 rounded-xl h-full w-full mx-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

const DummyContent4 = () => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4">
      <div className="flex gap-9 my-5 flex-col">
        {[...Array(9)].map((_, index) => (
          <video
            key={index}
            src={`/vid${index + 1}.mp4`}
            controls
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 rounded-xl h-full w-full mx-auto object-contain"
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
    src: "/logo6.png",
    content: <DummyContent4 />,
  },
];

export default MultipleCards;
