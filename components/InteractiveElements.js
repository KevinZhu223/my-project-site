'use client';
import { useEffect } from 'react';

export default function InteractiveElements() {
  useEffect(() => {
    // Add subtle hover effect without magnetic movement
    const addSubtleHoverEffect = (element) => {
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-2px)';
        element.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      });

      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translateY(0px)';
        element.style.boxShadow = '';
      });
    };

    // Remove floating animation - replaced with subtle hover-only effects
    const addSubtleHover = (element) => {
      element.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    };

    // Apply effects
    const buttons = document.querySelectorAll('button, .btn, a[class*="bg-gradient"]');
    const cards = document.querySelectorAll('.card-hover, [class*="bg-white"], [class*="bg-gradient-to-br"]');
    
    buttons.forEach(addSubtleHoverEffect);
    
    cards.forEach((card, index) => {
      addSubtleHoverEffect(card);
      addSubtleHover(card);
    });

    // Mouse animation removed - replaced with subtle background particles

    return () => {
      // Cleanup function - no mouse events to remove
    };
  }, []);

  return null;
}
