// pages/WhyUs.jsx
import React from 'react';
import { FaCheckCircle, FaClock, FaHeadset, FaThumbsUp } from 'react-icons/fa';

const WhyUs = () => {
  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: 'Quality Work',
      description: 'We deliver high-quality solutions that exceed expectations.',
    },
    {
      icon: <FaClock />,
      title: 'On-Time Delivery',
      description: 'We respect deadlines and always deliver projects on time.',
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Support',
      description: 'Our team is always available to help you with any issues.',
    },
    {
      icon: <FaThumbsUp />,
      title: 'Client Satisfaction',
      description: 'Your satisfaction is our top priority in every project.',
    },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      text: 'Amazing team! They delivered our project on time and exceeded our expectations.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      text: 'Professional service and great communication throughout the project.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Mike Wilson',
      role: 'Startup Founder',
      text: 'Best decision we made was choosing this team for our app development.',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why <span className="text-orange-500">Choose Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the perfect partner for your next project.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-5xl text-orange-500 mb-4 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-orange-500"
                />
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-orange-500 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;