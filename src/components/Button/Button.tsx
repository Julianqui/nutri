'use client';

import React from 'react';
import { getButtonStyles, buttonVariants } from './Button.styles';

interface ButtonProps {
  onClick: () => void;
  isDarkMode: boolean;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: React.CSSProperties;
  className?: string;
}

export default function Button({ 
  onClick, 
  isDarkMode, 
  children, 
  variant = 'primary',
  style = {}, 
  className = '' 
}: ButtonProps) {
  const baseStyle = buttonVariants[variant](isDarkMode);
  const finalStyle: React.CSSProperties = {
    ...baseStyle,
    ...style
  };

  return (
    <button
      onClick={onClick}
      style={finalStyle}
      className={className}
    >
      {children}
    </button>
  );
}
