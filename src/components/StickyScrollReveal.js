// src/components/StickyScrollReveal.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const StickyScrollReveal = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default StickyScrollReveal;