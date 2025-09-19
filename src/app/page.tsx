'use client';

import { useState } from 'react';
import Button from '../components/Button/Button';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import CursorTrail from '../components/CursorTrail/CursorTrail';
import AnimatedBackground from '../components/AnimatedBackground/AnimatedBackground'; 

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showCursorTrail, setShowCursorTrail] = useState(true);

  const toggleCursorTrail = () => {
    setShowCursorTrail(!showCursorTrail);
  };

  return (
    <main className={`container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Animated Background */}
      <AnimatedBackground variant="medium" />
      
      {/* Cursor Trail Effect */}
      {showCursorTrail && <CursorTrail variant="neon" maxDots={20} />}
      
      {/* Cursor Trail Toggle Switch */}
      <div style={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px', 
        zIndex: 1000 
      }}>
        <Button
          onClick={toggleCursorTrail}
          isDarkMode={isDarkMode}
        >
          {showCursorTrail ? '✨ Estela ON' : '🚫 Estela OFF'}
        </Button>
      </div>

      <Hero isDarkMode={isDarkMode} />
      
      <Experience isDarkMode={isDarkMode} />

    </main>
  )
}
