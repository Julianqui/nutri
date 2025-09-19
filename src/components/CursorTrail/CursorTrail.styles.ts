import { CSSProperties } from 'react';

export const getTrailDotStyles = (index: number, total: number, fadeOpacity: number = 1): CSSProperties => {
  const size = Math.max(6, 15 - (index * 0.5)); // Tamaño decreciente
  const baseOpacity = Math.max(0.3, 1 - (index * 0.1)); // Opacidad base decreciente
  const finalOpacity = baseOpacity * fadeOpacity; // Aplicar fade adicional
  
  return {
    position: 'fixed',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 10000,
    opacity: finalOpacity,
    background: `radial-gradient(circle, 
      rgba(147, 197, 253, 1) 0%, 
      rgba(196, 181, 253, 0.8) 50%, 
      rgba(147, 197, 253, 0.6) 100%)`,
    boxShadow: `0 0 ${size}px rgba(147, 197, 253, 0.8),
                0 0 ${size * 2}px rgba(196, 181, 253, 0.6)`,
    transform: 'translate(-50%, -50%)',
  };
};

export const getTrailContainerStyles = (): CSSProperties => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  pointerEvents: 'none',
  zIndex: 9999,
});

export const cursorTrailVariants = {
  default: {
    container: getTrailContainerStyles(),
    getDot: getTrailDotStyles,
  },
  neon: (index: number, total: number, fadeOpacity: number = 1): CSSProperties => {
    const size = Math.max(8, 18 - (index * 0.6));
    const baseOpacity = Math.max(0.4, 1 - (index * 0.08));
    const finalOpacity = baseOpacity * fadeOpacity;
    
    return {
      position: 'fixed',
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 10000,
      opacity: finalOpacity,
      background: `radial-gradient(circle, 
        rgba(147, 197, 253, 1) 0%, 
        rgba(196, 181, 253, 0.9) 30%, 
        rgba(147, 197, 253, 0.7) 70%,
        rgba(196, 181, 253, 0.4) 100%)`,
      boxShadow: `0 0 ${size}px rgba(147, 197, 253, 1),
                  0 0 ${size * 2}px rgba(196, 181, 253, 0.8),
                  0 0 ${size * 3}px rgba(147, 197, 253, 0.6)`,
      transform: 'translate(-50%, -50%)',
    };
  },
};
