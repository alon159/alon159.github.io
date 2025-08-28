// src/hooks/useScrollReveal.js
import { useInView } from 'react-intersection-observer';

export const useScrollReveal = (options = {}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...options
  });

  const className = `transition-opacity duration-1000 translate-y-0 ${
    inView ? 'opacity-100' : 'opacity-0'
  }`;

  return { ref, className, inView };
};