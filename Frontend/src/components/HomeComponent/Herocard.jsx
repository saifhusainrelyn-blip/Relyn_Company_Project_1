import React from 'react';
import cardimg1 from '../../assets/cardimg1.png'
import cardimg2 from '../../assets/cardimg2.png'

const WhatWeDo = () => {
  return (
    <section className="bg-[#F7FBFF] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-['Raleway']">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-black text-xs sm:text-sm font-semibold uppercase mb-2 tracking-[0.2em] font-sans">
            WHAT WE DO
          </h3>
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight py-2 sm:py-3 md:py-4">
            Property Preservation & <br className="hidden sm:block" />
            Routine Maintenance
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Card 1 - Property Preservation */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-white p-2">
              <img
                src={cardimg1}
                alt="Property Preservation"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">
                Property Preservation
              </h3>
              <p className="text-black text-sm sm:text-base leading-relaxed font-normal">
                We provide expert property preservation services and general upkeep to maintain compliance with regulatory requirements.
              </p>
            </div>
          </div>

          {/* Card 2 - Routine Maintenance */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-white p-2">
              <img
                src={cardimg2}
                alt="Routine Maintenance"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">
                Routine Maintenance
              </h3>
              <p className="text-black text-sm sm:text-base leading-relaxed">
                Our maintenance services cover preventative measures to ensure properties remain in optimal condition, reducing risks and avoiding costly damages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;