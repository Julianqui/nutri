'use client';

import React, { useEffect } from 'react';
import { backgroundVariants, getKeyframes } from './AnimatedBackground.styles';

interface AnimatedBackgroundProps {
  variant?: 'soft' | 'medium' | 'vibrant';
  className?: string;
}

export default function AnimatedBackground({ 
  variant = 'soft',
  className = '' 
}: AnimatedBackgroundProps) {
  
  useEffect(() => {
    // Inject keyframes into the document
    const style = document.createElement('style');
    style.textContent = getKeyframes();
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const styles = backgroundVariants[variant]();

  return (
    <div 
      style={styles} 
      className={className}
    />
  );
}
