'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Subtle floating particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Larger particles
        this.speedX = (Math.random() - 0.5) * 0.5; // Much slower movement
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1; // More visible
        this.color = `rgba(99, 102, 241, ${this.opacity})`; // Consistent blue color
        this.floatOffset = Math.random() * Math.PI * 2;
        this.floatSpeed = 0.02 + Math.random() * 0.01;
      }

      update() {
        // Gentle floating motion
        this.x += this.speedX;
        this.y += this.speedY + Math.sin(Date.now() * this.floatSpeed + this.floatOffset) * 0.1;

        // Wrap around edges
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.y > canvas.height + 10) this.y = -10;
        if (this.y < -10) this.y = canvas.height + 10;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000)); // More particles
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Reset global alpha for each frame
      ctx.globalAlpha = 1;
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Reset global alpha after drawing
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize with delay to ensure DOM is ready
    const init = () => {
      resizeCanvas();
      initParticles();
      animate();
    };
    
    // Small delay to ensure canvas is properly mounted
    setTimeout(init, 100);

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ 
        background: 'transparent',
        zIndex: 1
      }}
    />
  );
}
