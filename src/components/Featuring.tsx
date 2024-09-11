import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
const Featuring = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of the animation
           // Animation should happen only once
        });
      }, []);

  return (
    <div className="w-full bg-black px-4 md:px-8 lg:px-20 py-20">
    <div data-aos="zoom-in" className="heading w-full flex justify-center items-center md:text-4xl text-3xl font-bold text-white font-serif mb-12">
      <h1 className="mr-2">Featured</h1>
      <span className="text-red-700">Thumbnails</span>
    </div>
  
    <div  className="content  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      <img data-aos="fade-up-right" src="/feature/feature1.png" alt="Thumbnail 1" className="w-full h-auto border-gradient-animation3 shadow-lg" />
      <img data-aos="fade-up-right" src="/feature/feature11.png" alt="Thumbnail 2" className="w-full h-auto border-gradient-animation3 shadow-lg" />
      <img data-aos="fade-up-right" src="/feature/feature3.png" alt="Thumbnail 3" className="w-full h-auto border-gradient-animation3 shadow-lg" />
      <img data-aos="fade-up-right" src="/feature/feature4.png" alt="Thumbnail 4" className="w-full h-auto border-gradient-animation3 shadow-lg" />
      <img data-aos="fade-up-right" src="/feature/feature5.png" alt="Thumbnail 5" className="w-full h-auto border-gradient-animation3 shadow-lg" />
      <img data-aos="fade-up-right" src="/feature/feature10.png" alt="Thumbnail 6" className="w-full h-auto border-gradient-animation3 shadow-lg" />
      <img data-aos="fade-up-right" src="/feature/feature7.png" alt="Thumbnail 7" className="w-full h-auto border-gradient-animation3 shadow-lg" />
      <div className='hidden md:flex'>
      <img data-aos="fade-up-right" src="/feature/feature12.png" alt="Thumbnail 8" className="w-full h-auto border-gradient-animation3 shadow-lg" />
      </div>
      <img data-aos="fade-up-right" src="/feature/feature9.png" alt="Thumbnail 9" className="w-full h-auto border-gradient-animation3 shadow-lg" />
    </div>
  </div>
  )
}

export default Featuring
