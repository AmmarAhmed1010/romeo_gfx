"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
const MultipleCards = () => {

  useEffect(() => {
    AOS.init({
        duration: 1000, // Duration of the animation
        once: false,    // Animation should trigger each time the element scrolls into view
        offset: 100      // Offset to trigger animations earlier or later
    });
}, []);

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    // <section className="w-full  h-screen">
      <div className="w-full px-1 md:px-6 lg:px-16 bg-black">
        <h2 data-aos="zoom-in" className="md:text-4xl text-3xl font-bold text-red-700 font-serif text-center tracking-wide">
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
        {[...Array(16)].map((_, index) => (
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
const DummyContent5 = () => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 my-5">
        {[...Array(7)].map((_, index) => (
          <Image
            key={index}
            src={`/banner${index + 1}.png`}
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
    category: "Logo",
    title: "Click to see more",
    src: "/logo12.png",
    content: <DummyContent3 />,
  },
  {
    category: "Banner",
    title: "Click to see more",
    src: "/banner3.png",
    content: <DummyContent5 />,
  },
  {
    category: "Overlay",
    title: "Click to see more",
    src: "/imgprofile.png",
    content: <DummyContent4 />,
  },
];

export default MultipleCards;
