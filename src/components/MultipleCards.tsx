"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const MultipleCards = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full h-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-5xl font-bold text-white font-sans mb-8">
          Explore My Media Collection
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const DummyContent1 = () => {
  return (
    <div className="bg-black  p-8 md:p-14 rounded-3xl mb-4">

      <div className="flex gap-9 my-5 flex-col">
        <Image
          src="/gaming1.png"
          alt="AI illustration"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 rounded-xl h-full w-full mx-auto object-contain"
        />
        <Image
          src="/gaming2.png"
          alt="AI illustration"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 rounded-xl h-full w-full mx-auto object-contain"
        />
        <Image
          src="/gaming3.png"
          alt="AI illustration"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 rounded-xl h-full w-full mx-auto object-contain"
        />
      </div>
    </div>
  );
};

const DummyContent2 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <div className="m-2">
        <Image
          src="/imgproductivity.png"
          alt="Productivity tools"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </div>
  );
};

const DummyContent3 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Apple Vision Pro: The future is here
        </span>{" "}
        AI is revolutionizing the way we interact  </p>
      <div className="m-2">
        <Image
          src="/imgvisionpro.png"
          alt="Apple Vision Pro"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </div>
  );
};

const DummyContent4 = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Navigate your world with iPhone 15 Pro Max
        </span>{" "}
        AI is revolutionizing the way we interact   </p>
      <div className="m-2">
        <Image
          src="/gaming1.png"
          alt="iPhone 15 Pro Max Maps"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
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
    category: "Irl Thumbnails",
    title: "Click to see more",
    src: "/img1.png",
    content: <DummyContent2 />,
  },
  {
    category: "Logo Banner",
    title: "Click to see more",
    src: "/img1.png",
    content: <DummyContent3 />,
  },
  {
    category: "Overlay",
    title: "Click to see more",
    src: "/img1.png",
    content: <DummyContent4 />,
  },
];

export default MultipleCards;
