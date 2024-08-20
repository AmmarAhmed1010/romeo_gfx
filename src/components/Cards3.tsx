"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Cards3 = () => {
  return (
    <section className="p-6 bg-black">
      <h2 className="text-7xl font-bold text-white text-center mb-8">
        My <span className="text-red-600">Projects</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-400 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full h-full">
                <Image
                  src={`/img${index + 1}.png`} // Adjust image source as needed
                  height="1000"
                  width="1000"
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`thumbnail-${index + 1}`}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Cards3;
