import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import Manimg from '../../assets/manimg1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  const features = [
    'Proven Expertise',
    'Uncompromising Quality',
    'Cost Effective & Transparent Solutions'
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="bg-[#F7FBFF] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
          {/* Left Side - Image */}
          <div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src={Manimg}
              alt="Professional man"
              className="rounded-lg w-full sm:w-4/5 md:w-3/4 lg:w-[550px] max-w-md lg:max-w-none h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-left lg:mt-32">
            {/* Title with spacing */}
            <h3 
              className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-gray-600 mb-3 sm:mb-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              WHY CHOOSE US
            </h3>

            {/* Main Heading with shadow */}
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 drop-shadow-md leading-tight"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Professionalism in <br className="hidden sm:block" /> 
              <span className="sm:hidden"> </span>every detail
            </h2>

            {/* Description */}
            <p 
              className="text-black text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              We deliver exceptional results with attention to detail, combining 
              years of experience with innovative solutions to exceed your expectations 
              and bring your vision to life.
            </p>

            {/* Features List */}
            <ul className="space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3"
                  data-aos="fade-left"
                  data-aos-delay={300 + (index * 100)}
                >
                  <div className="bg-black rounded-full p-1 flex-shrink-0">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <span className="text-black text-sm sm:text-base font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button 
              className="bg-[#FF7656] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#ff6342] transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer text-sm sm:text-base w-full sm:w-auto"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;