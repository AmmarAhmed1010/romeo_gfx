"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FlipWords } from "@/components/ui/flip-words";
import GenerateText from "@/components/GenerateText";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import MultipleCards from "@/components/MultipleCards";
import Footer from "@/components/Footer";

export default function Home() {

  const items = [
    { title: "Thumbnail Design", price: "250", description: "Thumbnails for your videos." },
    { title: "Logo Design", price: "400", description: "Professional logos for your brand." },
    { title: "Banner Design", price: "450", description: "Custom banners for any platform." },
    { title: "Overlay Design", price: "500 / 1500", description: "Perfect overlays for your streams." },
    { title: "Posters", price: "700", description: "Stunning posters for promotions." },
    { title: "FB Banner", price: "500", description: "Custom Facebook banners." },
    { title: "Intro / Outro", price: "800", description: "Professional video intros/outros." },
    { title: "Jersey Shirts", price: "1200", description: "Custom jerseys for your team." },
  ];

  const words = ["Animation", "Styling"];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false,    // Animation should trigger each time the element scrolls into view
      offset: 100      // Offset to trigger animations earlier or later
    });
  }, []);

  const whatsappNumber = '03158552233'; // Replace with your WhatsApp number
  const contactMessage = "Hello, I'm interested in your services.";


  return (

    <>
      <div className="w-full bg-black px-4 md:px-8 lg:px-16">

        {/* section1 */}
        <section className="md:h-screen h-full">
          {/* Header */}
          <div
            data-aos="fade-up-right"
            className="text-white w-full text-3xl 2xl:text-5xl font-extrabold font-serif flex justify-center py-4"
          >
            <h1>Romeo</h1>
            <span className="text-red-700">GFX</span>
          </div>
          {/* Main */}
          <div className="flex flex-col-reverse lg:flex-row 2xl:h-full  2xl:pb-20 2xl:flex-row 2xl:items-center">
            {/* DivLeft */}
            <div className="2xl:gap-3 2xl:w-1/2 lg:w-1/2 flex flex-col py-4 px-4">
              <div
                data-aos="fade-up-right"
                className="flex gap-2 2xl:gap-3 mb-2 2xl:text-7xl lg:text-5xl text-3xl"
              >
                <h1 className="text-white font-serif">I Am</h1>
                <span className="font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-white">
                  RomeoGFX
                </span>
              </div>

              <div data-aos="fade-up-right">
                <div
                  className="text-xl 2xl:text-5xl lg:text-3xl font-serif text-white"
                >
                  I specialize in <FlipWords words={words} /> <br />
                </div>
              </div>
              <div
                data-aos="fade-up-right"
              >
                <GenerateText />
              </div>
              <div
                className="my-4"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
                >
                  Hire Me
                </a>
              </div>
            </div>
            {/* DivRight */}
            <div
              data-aos="fade-right"
              className="w-full lg:w-1/2  b md:justify-center py-2 pb-2 overflow-hidden"
            >
              <div className="mx-auto w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] 2xl:w-[400px] 2xl:h-[400px]  relative">
                <Image
                  src="/imgprofile.png"
                  alt="Profile Image"
                  className="border-gradient-animation2"
                  layout="fill" // Ensures the image fills the container and scales with it
                  objectFit="cover" // Ensures the image maintains aspect ratio and fills the container
                  priority={true} // Loads image faster since it's likely above the fold
                  sizes="(max-width: 768px) 200px, (max-width: 1024px) 350px, 400px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* section */}
        <div className="w-full py-10">
          <div data-aos="zoom-in" className="heading w-full flex justify-center items-center md:text-4xl text-3xl font-bold text-white font-serif mb-12">
            <h1 className="mr-2">Featured</h1>
            <span className="text-red-700">Thumbnails</span>
          </div>

          <div data-aos="fade-up-right" className="content  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <img src="/gaming1.png" alt="Thumbnail 1" className="w-full h-auto border-gradient-animation3 shadow-lg" />
            <img src="/gaming2.png" alt="Thumbnail 2" className="w-full h-auto border-gradient-animation3 shadow-lg" />
            <img src="/gaming3.png" alt="Thumbnail 3" className="w-full h-auto border-gradient-animation3 shadow-lg" />
            <img src="/gaming4.png" alt="Thumbnail 4" className="w-full h-auto border-gradient-animation3 shadow-lg" />
            <img src="/gaming5.png" alt="Thumbnail 5" className="w-full h-auto border-gradient-animation3 shadow-lg" />
            <img src="/gaming6.png" alt="Thumbnail 6" className="w-full h-auto border-gradient-animation3 shadow-lg" />
          </div>
        </div>

        {/* section */}
{/*         
        <div className="w-full py-10">
  <div data-aos="zoom-in" className="heading w-full flex justify-center items-center md:text-4xl text-3xl font-bold text-white font-serif mb-12">
    <h1 className="mr-2">Before</h1>
    <h1 className="text-red-700 mr-2">Vs</h1>
    <span>After</span>
  </div>

  <div data-aos="fade-up-right" className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
    <div className="relative w-full">
      <img src="/beforeafter/before1.png" alt="Thumbnail 1" className="w-full h-64 border-gradient-animation3 shadow-lg" />
    </div>
    <div className="relative w-full">
      <img src="/beforeafter/after1.png" alt="Thumbnail 2" className="w-full h-64  border-gradient-animation3 shadow-lg" />
    </div>
    <div className="relative w-full">
      <img src="/beforeafter/before1.png" alt="Thumbnail 1" className="w-full h-64 border-gradient-animation3 shadow-lg" />
    </div>
    <div className="relative w-full">
      <img src="/beforeafter/after1.png" alt="Thumbnail 2" className="w-full h-64 border-gradient-animation3 shadow-lg" />
    </div>
  </div>
</div> */}

        {/* section2 */}
        <section>
          <MultipleCards />
        </section>
        {/* section3 */}



        <section className="w-full py-10">
          <div className="mx-auto font-serif">
            {/* Section heading */}
            <div data-aos="zoom-in">
              <h2 className="md:text-4xl text-3xl font-bold text-white mb-12 text-center tracking-wide">
                Our <span className="text-red-600">Price</span> List
              </h2>
            </div>
            {/* Pricing items grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up-right" // AOS zoom-in-up effect
                  className="border-gradient-animation text-center"
                >
                  {/* Inner content container */}
                  <div className="content2 w-full h-full">
                    {/* Title */}

                    <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500  to-yellow-500 mb-3">
                      {item.title}
                    </h3>
                    {/* Description */}
                    <p className="text-sm md:text-lg text-gray-300 mb-2">
                      {item.description}
                    </p>
                    {/* Price */}
                    <p className="text-xl md:text-2xl font-bold text-red-700">
                      <span className='text-white'>Rs:</span> {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* section4 */}
        <section>
          <div className='w-full py-10'>
            <div
              data-aos="zoom-in"
              className='text-center'>
              <h2 className="md:text-4xl text-3xl font-bold text-white font-serif mb-8 text-center">
                Our <span className="text-red-700">Pricing</span> Plan
              </h2>
            </div>

            <div className="flex flex-col md:flex-row font-serif justify-center items-center space-y-8 md:space-y-0 md:space-x-4 p-4">
              {/* Card 1 */}
              <div
                data-aos="fade-right" // Scroll reveal animation
                className="border-gradient-animation shadow-lg rounded-3xl p-6 max-w-sm w-full"
              >
                <div className="content2">
                  <div className='w-full text-center'>
                    <span className="font-serif text-3xl md:text-2xl font-bold bg-clip-text text-red-600">
                      Basic Plan
                    </span>
                  </div>

                  <div className='flex items-center gap-2'>
                    <h4 className='text-xl text-white'>Starts at</h4>
                    <span className='text-2xl font-bold text-yellow-500'>Rs: 1500</span>
                  </div>
                  <div className="content text-white space-y-2 my-4">
                    {[
                      '2 HD Thumbnail',
                      '1 Logo',
                      '1 Banner',
                      '1 Non Animated Overlay'
                    ].map((item, index) => (
                      <h4 className="flex items-center" key={index}>
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {item}
                      </h4>
                    ))}
                  </div>
                  <div className="w-full flex justify-center">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
                    >
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                data-aos="fade-right"
                className="border-gradient-animation shadow-lg rounded-3xl p-6 max-w-sm w-full"
              >
                <div className="content2">
                  <div className='w-full text-center'>
                    <span className="font-serif text-3xl md:text-2xl font-bold bg-clip-text text-red-600">
                      Standard Plan
                    </span>
                  </div>

                  <div className='flex items-center gap-2'>
                    <h4 className='text-xl text-white'>Starts at</h4>
                    <span className='text-2xl font-bold text-yellow-500'>Rs: 2300</span>
                  </div>
                  <div className="content text-white space-y-2 my-4">
                    {[
                      '2 HD Thumbnail',
                      '1 Logo',
                      '1 Banner',
                      '1 Professional Animated Overlay'
                    ].map((item, index) => (
                      <h4 className="flex items-center" key={index}>
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {item}
                      </h4>
                    ))}
                  </div>
                  <div className="w-full flex justify-center">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block text-center"
                    >
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div
                data-aos="fade-right"
                className="border-gradient-animation shadow-lg rounded-3xl p-6 max-w-sm w-full"
              >
                <div className="content2">
                  <div className='w-full text-center'>
                    <span className="font-serif text-3xl md:text-2xl font-bold bg-clip-text text-red-600">
                      Premium Plan
                    </span>
                  </div>

                  <div className='flex items-center gap-2'>
                    <h4 className='text-xl text-white'>Starts at</h4>
                    <span className='text-2xl font-bold text-yellow-500'>Rs: 2800</span>
                  </div>
                  <div className="content text-white space-y-2 my-4">
                    {[
                      '3 HD Thumbnail',
                      '1 Logo',
                      '1 Banner',
                      '1 Professional Overlay'
                    ].map((item, index) => (
                      <h4 className="flex items-center" key={index}>
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {item}
                      </h4>
                    ))}
                  </div>
                  <div className="w-full flex justify-center">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg inline-block text-center"
                    >
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section5 */}
        <Footer />
      </div>
    </>
  );
}
