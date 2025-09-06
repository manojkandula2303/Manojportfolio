import { useEffect } from 'react';
import './ScrollAnimations.css';

export const useScrollAnimations = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the base visible class
          entry.target.classList.add('visible');
          
          // Add specific animation classes based on data attributes
          if (entry.target.hasAttribute('data-slide-in')) {
            entry.target.classList.add('slide-in-visible');
          }
          if (entry.target.hasAttribute('data-scale-in')) {
            entry.target.classList.add('scale-in-visible');
          }
          if (entry.target.hasAttribute('data-rotate-in')) {
            entry.target.classList.add('rotate-in-visible');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe elements with different animation classes
    const elements = document.querySelectorAll('.section-fade-in, [data-slide-in], [data-scale-in], [data-rotate-in]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export const ScrollAnimations = () => {
  useScrollAnimations();
  return null;
};