import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardsDesign = () => {
  const whatsappNumber = '03158552233'; // Replace with your WhatsApp number
  const contactMessage = "Hello, I'm interested in your services.";
  

  const plans = [
    {
      title: 'Basic Plan',
      price: '1699',
      features: ['2 HD Thumbnail', '1 Logo', '1 Banner', '1 Non Animated Overlay'],
    },
    {
      title: 'Standard Plan',
      price: '2499',
      features: ['2 HD Thumbnail', '1 Logo', '1 Banner', '1 Professional Animated Overlay'],
    },
    {
      title: 'Premium Plan',
      price: '2999',
      features: ['3 HD Thumbnail', '1 Logo', '1 Banner', '1 Professional Overlay'],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000,  offset: 50 });
    
}, []);

  return (
    <div className='flex bg-black flex-col w-full'>
      <div data-aos="zoom-in" className='text-center'>
        <h2 className="text-3xl md:text-4xl font-medium font-serif mb-8 text-white text-center">
          Our <span className="text-red-700 text-3xl md:text-4xl font-medium font-serif">Pricing</span> Plan
        </h2>
      </div>

      <div className="flex flex-col md:flex-row font-serif justify-center items-center space-y-8 md:space-y-0 md:space-x-4 p-4">
        {plans.map((plan, index) => (
          <div
          data-aos="fade-right"
            key={index}
            className="border-gradient-animation shadow-lg rounded-3xl p-6 max-w-sm w-full"
          >
            <div className="content2">
              <div className='w-full text-center'>
                <span className="font-serif text-3xl md:text-2xl font-bold bg-clip-text text-red-600">
                  {plan.title}
                </span>
              </div>

              <div className='flex items-center gap-2'>
                <h4 className='text-xl text-white'>Starts at</h4>
                <span className='text-2xl font-bold text-yellow-500'>Rs: {plan.price}</span>
              </div>
              
              <div className="content text-white space-y-2 my-4">
                {plan.features.map((feature, idx) => (
                  <h4 className="flex items-center" key={idx}>
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
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
        ))}
      </div>
    </div>
  );
};

export default CardsDesign;
