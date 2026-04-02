import React, { useState, useEffect, useRef } from 'react';

const CounterSection = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const counterData = [
    {
      count: 15,
      suffix: '+',
      label: 'Years Experience'
    },
    {
      count: 50,
      suffix: 'K+',
      label: 'Properties Serviced'
    },
    {
      count: 50,
      suffix: '',
      label: 'States Covered'
    },
    {
      count: 98,
      suffix: '%',
      label: 'Client Satisfaction'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    counterData.forEach((item, index) => {
      let start = 0;
      const end = item.count;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = end;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }
      }, 16);
    });
  };

  return (
    <section ref={sectionRef} className="bg-[#0A2540] py-7 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counterData.map((item, index) => (
            <div 
              key={index} 
              className="text-center p-6"
            >
              <h2 className="text-5xl font-bold text-[#FF7656] mb-4">
                {counts[index]}{item.suffix}
              </h2>
              <p className="text-white text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;