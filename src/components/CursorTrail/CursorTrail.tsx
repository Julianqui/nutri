'use client';

import React, { useState, useEffect } from 'react';
import { cursorTrailVariants } from './CursorTrail.styles';

interface TrailDot {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

interface CursorTrailProps {
  variant?: 'default' | 'neon';
  maxDots?: number;
  className?: string;
}

export default function CursorTrail({ 
  variant = 'default',
  maxDots = 15,
  className = '' 
}: CursorTrailProps) {
  const [trailDots, setTrailDots] = useState<TrailDot[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newDot: TrailDot = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      };

      setTrailDots(prevDots => {
        const updatedDots = [newDot, ...prevDots].slice(0, maxDots);
        return updatedDots;
      });
    };

    // Animation loop to handle fading
    const animateTrail = () => {
      setTrailDots(prevDots => {
        const now = Date.now();
        return prevDots.filter(dot => {
          const age = now - dot.timestamp;
          return age < 800; // Remove dots older than 800ms
        });
      });
      
      requestAnimationFrame(animateTrail);
    };

    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);
    
    // Start animation loop
    const animationId = requestAnimationFrame(animateTrail);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [maxDots]);

  const getDotStyle = (dot: TrailDot, index: number) => {
    const now = Date.now();
    const age = now - dot.timestamp;
    const fadeProgress = Math.min(age / 800, 1); // 800ms fade duration
    const opacity = 1 - fadeProgress;
    
    if (variant === 'neon') {
      return cursorTrailVariants.neon(index, trailDots.length, opacity);
    }
    return cursorTrailVariants.default.getDot(index, trailDots.length, opacity);
  };

  return (
    <div style={cursorTrailVariants.default.container} className={className}>
      {trailDots.map((dot, index) => (
        <div
          key={dot.id}
          style={{
            ...getDotStyle(dot, index),
            left: dot.x,
            top: dot.y,
          }}
        />
      ))}
    </div>
  );
}
