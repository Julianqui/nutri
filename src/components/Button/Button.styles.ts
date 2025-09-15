import { CSSProperties } from 'react';

export const getButtonStyles = (isDarkMode: boolean): CSSProperties => ({
  background: isDarkMode ? 'linear-gradient(135deg,rgb(102, 234, 104) 0%,rgb(75, 162, 75) 100%)' : '#f0f0f0',
  border: 'none',
  borderRadius: '25px',
  padding: '10px 20px',
  color: isDarkMode ? 'white' : '#333',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '600',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.3s ease',
});

export const buttonVariants = {
  primary: (isDarkMode: boolean): CSSProperties => getButtonStyles(isDarkMode),
  secondary: (isDarkMode: boolean): CSSProperties => ({
    ...getButtonStyles(isDarkMode),
    background: isDarkMode ? 'rgba(30, 41, 59, 0.8)' : '#e9ecef',
    color: isDarkMode ? '#cbd5e1' : '#495057',
  }),
  outline: (isDarkMode: boolean): CSSProperties => ({
    ...getButtonStyles(isDarkMode),
    background: 'transparent',
    border: isDarkMode ? '2px solid #667eea' : '2px solid #6c757d',
    color: isDarkMode ? '#667eea' : '#6c757d',
  }),
};
