'use client';

import React from 'react';
import { footerVariants } from './Footer.styles';

interface FooterProps {
  isDarkMode: boolean;
  variant?: 'default';
  className?: string;
}

export default function Footer({ 
  isDarkMode, 
  variant = 'default',
  className = '' 
}: FooterProps) {
  const styles = footerVariants[variant](isDarkMode);

  return (
    <footer style={styles.container} className={className}>
      <div style={styles.content}>
        <div style={styles.emailSection}>
          <h3 style={styles.title}>Contacto</h3>
          <a 
            href="mailto:julianquin8@gmail.com"
            style={styles.emailLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = isDarkMode ? '#60a5fa' : '#007bff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = isDarkMode ? '#cbd5e1' : '#6c757d';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={styles.emailIcon}>📧</span>
            julianquin8@gmail.com
          </a>
        </div>
        
        <div style={styles.divider}></div>
        
        <div style={styles.copyright}>
          <p style={styles.copyrightText}>
            © 2025 Julian Quinteiro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
