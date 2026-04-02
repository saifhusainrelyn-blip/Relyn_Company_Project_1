import React, { useState, useEffect } from 'react';
import testimonialiconimg from '../../assets/testimonialicon.png'
import clientlogoimg from '../../assets/clientlogo.png'

const Star = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    logo: testimonialiconimg,
    text: "We've worked with several property preservation companies, but Cardinal Asset stands out for their reliability and quality. Their maintenance crews are skilled, courteous, and efficient. The value they provide is exceptional.",
    avatar: clientlogoimg,
    name: "David Martinez",
    position: "Property Manager",
    rating: 5
  },
  {
    id: 2,
    logo: testimonialiconimg,
    text: "We've worked with several property preservation companies, but Cardinal Asset stands out for their reliability and quality. Their maintenance crews are skilled, courteous, and efficient. The value they provide is exceptional.",
    avatar: clientlogoimg,
    name: "Sarah Johnson",
    position: "Bank Asset Manager",
    rating: 5
  },
  {
    id: 3,
    logo: testimonialiconimg,
    text: "We've worked with several property preservation companies, but Cardinal Asset stands out for their reliability and quality. Their maintenance crews are skilled, courteous, and efficient. The value they provide is exceptional.",
    avatar: clientlogoimg,
    name: "Michael Chen",
    position: "Real Estate Director",
    rating: 5
  },
  {
    id: 4,
    logo: testimonialiconimg,
    text: "We've worked with several property preservation companies, but Cardinal Asset stands out for their reliability and quality. Their maintenance crews are skilled, courteous, and efficient. The value they provide is exceptional.",
    avatar: clientlogoimg,
    name: "Emily Roberts",
    position: "Asset Management VP",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('next');

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Get previous and next indices for partial view
  const getPrevIndex = () => currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  const getNextIndex = () => currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

  const TestimonialCard = ({ testimonial, type = 'center' }) => {
    const isCenter = type === 'center';
    
    return (
      <div 
        className={`bg-white rounded-2xl shadow-xl p-8 sm:p-12 transition-all duration-700 ease-in-out ${
          !isCenter 
            ? 'opacity-40 blur-sm scale-95 pointer-events-none' 
            : 'opacity-100 scale-100'
        }`}
        onClick={() => !isCenter && goToSlide(testimonials.findIndex(t => t.id === testimonial.id))}
      >
        {/* Logo */}
        <div className="mb-6 transform transition-all duration-700">
          <img 
            src={testimonial.logo} 
            alt="Company logo" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8 transition-all duration-700">
          "{testimonial.text}"
        </p>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-6 transition-all duration-700"></div>

        {/* Author Info */}
        <div className="flex items-center justify-between flex-wrap gap-4 transition-all duration-700">
          <div className="flex items-center gap-4">
            {/* Avatar Circle with Image */}
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Position */}
            <div>
              <h4 className="font-semibold text-black text-lg">
                {testimonial.name}
              </h4>
              <p className="text-gray-500 text-sm">
                {testimonial.position}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, index) => (
              <Star
                key={index}
                className="w-5 h-5 fill-[#ff7657] text-[#ff7657]"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#F7FBFF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 py-5">
          <h2 className="text-4xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-black max-w-3xl mx-auto text-lg py-4">
            Don't just take our word for it - hear from the property managers, banks, 
            and asset management companies who trust Cardinal Asset
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div 
            className="flex items-center justify-center gap-4 px-4 transition-transform duration-700 ease-in-out"
            key={currentIndex}
          >
            {/* Previous Testimonial (Partial, Blurred) */}
            <div className="hidden lg:block w-1/4 flex-shrink-0 animate-fadeInLeft">
              <TestimonialCard testimonial={testimonials[getPrevIndex()]} type="prev" />
            </div>

            {/* Current Testimonial (Main, Centered) */}
            <div className="w-full lg:w-2/4 flex-shrink-0 animate-fadeInScale">
              <TestimonialCard testimonial={testimonials[currentIndex]} type="center" />
            </div>

            {/* Next Testimonial (Partial, Blurred) */}
            <div className="hidden lg:block w-1/4 flex-shrink-0 animate-fadeInRight">
              <TestimonialCard testimonial={testimonials[getNextIndex()]} type="next" />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#ff7657] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) scale(0.95);
          }
          to {
            opacity: 0.4;
            transform: translateX(0) scale(0.95);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px) scale(0.95);
          }
          to {
            opacity: 0.4;
            transform: translateX(0) scale(0.95);
          }
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.7s ease-in-out;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.7s ease-in-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.7s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;