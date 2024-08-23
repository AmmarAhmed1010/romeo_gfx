import React from 'react'

const PricingPlan = () => {
    const pricingPlans = [
        {
          title: "Basic Plan",
          price: "Rs: 1500",
          features: ["2 HD Thumbnail", "1 Logo", "1 Banner","1 Non Animated Overlay"],
        },
        {
          title: "Standard Plan",
          price: "Rs: 2300",
          features: ["2 HD Thumbnail", "1 Logo", "1 Banner","1 Professional Animated Overlay"],
        },
        {
          title: "Premium Plan",
          price: "Rs: 2800",
          features: ["3 HD Thumbnail", "1 Logo", "1 Banner","1 Professional Animated Overlay"],
        },
      ];
    
      return (
        <section className="w-full h-full py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center mb-12">
              Our <span className='text-red-700'>Pricing</span> Plans
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-red-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {plan.title}
                  </h3>
                  <p className="text-3xl font-bold text-white mb-6">
                    {plan.price}
                  </p>
                  <ul className="mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-white mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition transform hover:scale-105">
                Choose Plan
              </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

export default PricingPlan
