// pages/Services.jsx
import React from 'react';
import { FaCode, FaMobile, FaPalette, FaCloud, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cyber Security',
      description: 'Protect your business with our advanced security solutions.',
    },
    {
      icon: <FaChartLine />,
      title: 'Digital Marketing',
      description: 'Grow your online presence with our marketing strategies.',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of services to help your business succeed in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                         transition-shadow duration-300 group"
            >
              <div className="text-4xl text-orange-500 mb-4 group-hover:scale-110 
                              transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-orange-500 font-medium hover:text-orange-600 
                                 transition-colors duration-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;