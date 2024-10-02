import React from 'react';
import { motion, useInView } from 'framer-motion'; // Import framer-motion for animations
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link'; // Import Link for navigation

const Thumbnail = () => {
    // Define motion variants for smooth animations
    const headingVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeInOut' } },
    };

    const thumbnailVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    };

    return (
        <div className="w-full bg-black px-4 md:px-8 lg:px-20 py-10">
            {/* Heading for the Featuring section */}
            <motion.div 
                variants={headingVariant}
                initial="hidden"
                animate="visible"
                className="heading w-full flex justify-center items-center text-white mb-12"
            >
                <h1 className="mr-2 text-3xl md:text-4xl font-medium font-serif">Featured</h1>
                <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">Thumbnails</span>
            </motion.div>

            {/* Featuring Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
                {[...Array(6)].map((_, index) => {
                    const ref = React.useRef(null); // Create a ref to track the visibility
                    const inView = useInView(ref, { once: true }); // Check if the component is in view

                    return (
                        <motion.div 
                            key={index}
                            ref={ref} // Attach the ref to the motion div
                            variants={thumbnailVariant}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'} // Animate based on visibility
                        >
                            <Image
                                src={`/feature/feature${index + 1}.png`}
                                alt={`Feature thumbnail ${index + 1}`}
                                height={500}
                                width={500}
                                className="rounded-xl object-cover w-full h-auto border-gradient-animation3"
                            />
                        </motion.div>
                    );
                })}
            </div>

            {/* Heading for the Zombie Thumbnails section */}
            <motion.div
                variants={headingVariant}
                initial="hidden"
                animate="visible"
                className="heading w-full flex justify-center items-center text-white mt-16 mb-12"
            >
                <h1 className="mr-2 text-3xl md:text-4xl font-medium font-serif">Featured</h1>
                <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">Zombie Thumbnails</span>
            </motion.div>

            {/* Zombie Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
                {[...Array(6)].map((_, index) => {
                    const ref = React.useRef(null); // Create a ref to track the visibility
                    const inView = useInView(ref, { once: true }); // Check if the component is in view

                    return (
                        <motion.div 
                            key={index}
                            ref={ref} // Attach the ref to the motion div
                            variants={thumbnailVariant}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'} // Animate based on visibility
                        >
                            <Image
                                src={`/zombie/zombie${index + 1}.png`}
                                alt={`Zombie thumbnail ${index + 1}`}
                                height={500}
                                width={500}
                                className="rounded-xl object-cover w-full h-auto border-gradient-animation3"
                            />
                        </motion.div>
                    );
                })}
            </div>

            {/* Link to view all zombie thumbnails */}
            <div className="w-full flex justify-center mt-12">
                <Link href="/zombie_thumbnail">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition-all"
                    >
                        View All Images
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};

export default Thumbnail;
