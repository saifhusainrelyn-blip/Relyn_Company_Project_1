// pages/FAQ.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer web development, mobile app development, UI/UX design, cloud solutions, cyber security, and digital marketing services.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website may take 2-4 weeks, while complex applications can take 3-6 months.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements based on your needs.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your project continues to run smoothly.',
    },
    {
      question: 'Can you work with my existing team?',
      answer: 'Absolutely! We can seamlessly integrate with your existing team and workflows to deliver the best results.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We work with modern technologies including React, Node.js, Python, AWS, and many more based on project requirements.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center 
                           hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                <span className="text-orange-500">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-orange-500 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-white mb-4">
            Our team is here to help you with any inquiries.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-500 px-6 py-3 rounded-lg 
                       font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;