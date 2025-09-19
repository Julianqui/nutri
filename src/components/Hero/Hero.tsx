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
      
      {/* Social Links */}
      <div style={{ 
        margin: '1rem 0',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {/* LinkedIn Link */}
        <a 
          href="https://www.linkedin.com/in/julian-quinteiro-b32404154/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: isDarkMode ? '#60a5fa' : '#007bff',
            fontSize: '1.1rem',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: isDarkMode 
              ? '1px solid rgba(96, 165, 250, 0.3)' 
              : '1px solid rgba(0, 123, 255, 0.3)',
            background: isDarkMode 
              ? 'rgba(96, 165, 250, 0.1)' 
              : 'rgba(0, 123, 255, 0.1)',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = isDarkMode 
              ? 'rgba(96, 165, 250, 0.2)' 
              : 'rgba(0, 123, 255, 0.2)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = isDarkMode 
              ? '0 4px 20px rgba(96, 165, 250, 0.3)' 
              : '0 4px 20px rgba(0, 123, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = isDarkMode 
              ? 'rgba(96, 165, 250, 0.1)' 
              : 'rgba(0, 123, 255, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}>💼</span>
          LinkedIn
        </a>

        {/* GitHub Link */}
        <a 
          href="https://github.com/Julianqui/nutri.git" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: isDarkMode ? '#ffffff' : '#333333',
            fontSize: '1.1rem',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: isDarkMode 
              ? '1px solid rgba(255, 255, 255, 0.3)' 
              : '1px solid rgba(0, 0, 0, 0.2)',
            background: isDarkMode 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = isDarkMode 
              ? 'rgba(255, 255, 255, 0.2)' 
              : 'rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = isDarkMode 
              ? '0 4px 20px rgba(255, 255, 255, 0.2)' 
              : '0 4px 20px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = isDarkMode 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}>🐙</span>
          GitHub
        </a>
      </div>
      
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
