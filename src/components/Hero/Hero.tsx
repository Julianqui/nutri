'use client';

import React from 'react';
import { heroVariants } from './Hero.styles';

interface HeroProps {
  isDarkMode: boolean;
  variant?: 'default';
  className?: string;
}

const techStack = [
  'Next.js',
  'React.js',
  'TypeScript',
  'Styled Components',
  'Tailwind',
  'JavaScript',
  'React testing library',
  'Jest'
];

export default function Hero({ 
  isDarkMode, 
  variant = 'default',
  className = '' 
}: HeroProps) {
  const styles = heroVariants[variant](isDarkMode);

  return (
    <div className={`hero animate-fade-in-up ${className}`}>
      <h1>Julian Quinteiro</h1>
      <p>Frontend developer</p>
      <div className="tech-stack" style={styles.techStack}>
        <p style={styles.techLabel}>Tecnologías:</p>
        <div className="d-flex-center" style={styles.techBadgesContainer}>
          {techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
