'use client';

import { useState } from 'react';
import Button from '../components/Button/Button';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import CursorTrail from '../components/CursorTrail/CursorTrail'; 

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Cursor Trail Effect */}
      <CursorTrail variant="neon" maxDots={20} />
      
      {/* Theme Toggle Switch */}
      <div style={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px', 
        zIndex: 1000 
      }}>
        <Button
          onClick={toggleTheme}
          isDarkMode={isDarkMode}
        >
          {isDarkMode ? '🌙 Dark' : '☀️ Light'}
        </Button>
      </div>

      <Hero isDarkMode={isDarkMode} />
      
      <Experience isDarkMode={isDarkMode} />

    </main>
  )
}
