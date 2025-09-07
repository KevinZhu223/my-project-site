'use client';
import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Wait for DOM to be fully loaded before observing
    setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll(
        'section, .card-hover, .bg-white, .bg-gradient-to-br, .timeline-card'
      );

      elementsToAnimate.forEach((el) => {
        // Only animate if element is not already visible
        if (!el.classList.contains('animate-fade-in-up')) {
          el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
          observer.observe(el);
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return null;
}
