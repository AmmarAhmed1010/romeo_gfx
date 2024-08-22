"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const MultipleCards = () => {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));
    
    return (
      <section className="w-full h-full py-20">
      <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl md:text-5xl font-bold text-white font-sans mb-8">
          Explore My Media Collection.
          </h2>
          <Carousel items={cards} />
      </div>
  </section>
    );
}

const DummyContent1 = () => {
    return (
        <div className="bg-black  p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-red-600">
                    Discover the power of AI.
                </span>{" "}
                AI is revolutionizing the way we interact with technology. From personalized recommendations to intelligent automation, AI is here to enhance every aspect of your life.
            </p>
            <div className="flex gap-2  my-2 flex-col">
                <Image
                    src="/imgprofile.png"
                    alt="AI illustration"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 rounded-xl h-full w-full mx-auto object-contain"
                />
                 <Image
                    src="/imgprofile.png"
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
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Boost your productivity with new tools.
                </span>{" "}
                Explore our latest productivity tools designed to help you manage your time better, collaborate efficiently, and achieve more.
            </p>
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
                    Apple Vision Pro: The future is here.
                </span>{" "}
                Experience the latest in augmented reality with the Apple Vision Pro. It's not just a product; it's a portal to new dimensions.
            </p>
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
                    Navigate your world with iPhone 15 Pro Max.
                </span>{" "}
                The new Maps feature on the iPhone 15 Pro Max brings you the most accurate and detailed maps yet. Explore the world with confidence.
            </p>
            <div className="m-2">
                <Image
                    src="/imgmaps.png"
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
        category: "Thumbnails",
        title: "Click to see more",
        src: "/imgprofile.png",
        content: <DummyContent1 />,
    },
    {
        category: "Productivity",
        title: "Enhance your productivity.",
        src: "/img1.png",
        content: <DummyContent2 />,
    },
    {
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        src: "/img1.png",
        content: <DummyContent3 />,
    },
    {
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        src: "/img1.png",
        content: <DummyContent4 />,
    },
];

export default MultipleCards;
