import { CSSProperties } from 'react';

export const getBackgroundStyles = (): CSSProperties => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: -1,
  background: `
    linear-gradient(45deg, 
      rgba(147, 197, 253, 0.1) 0%, 
      rgba(196, 181, 253, 0.1) 25%, 
      rgba(252, 211, 77, 0.1) 50%, 
      rgba(34, 197, 94, 0.1) 75%, 
      rgba(147, 197, 253, 0.1) 100%)
  `,
  backgroundSize: '400% 400%',
  animation: 'gradientShift 15s ease infinite',
});

export const getKeyframes = () => `
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const backgroundVariants = {
  soft: (): CSSProperties => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    background: `
      linear-gradient(45deg, 
        rgba(147, 197, 253, 0.2) 0%, 
        rgba(196, 181, 253, 0.2) 25%, 
        rgba(252, 211, 77, 0.2) 50%, 
        rgba(34, 197, 94, 0.2) 75%, 
        rgba(147, 197, 253, 0.2) 100%)
    `,
    backgroundSize: '400% 400%',
    animation: 'gradientShift 15s ease infinite',
  }),
  medium: (): CSSProperties => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    background: `
      linear-gradient(45deg, 
        rgba(147, 197, 253, 0.3) 0%, 
        rgba(196, 181, 253, 0.3) 25%, 
        rgba(252, 211, 77, 0.3) 50%, 
        rgba(34, 197, 94, 0.3) 75%, 
        rgba(147, 197, 253, 0.3) 100%)
    `,
    backgroundSize: '400% 400%',
    animation: 'gradientShift 15s ease infinite',
  }),
  vibrant: (): CSSProperties => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    background: `
      linear-gradient(45deg, 
        rgba(147, 197, 253, 0.4) 0%, 
        rgba(196, 181, 253, 0.4) 25%, 
        rgba(252, 211, 77, 0.4) 50%, 
        rgba(34, 197, 94, 0.4) 75%, 
        rgba(147, 197, 253, 0.4) 100%)
    `,
    backgroundSize: '400% 400%',
    animation: 'gradientShift 15s ease infinite',
  }),
};
