import { CSSProperties } from 'react';

export const getFooterContainerStyles = (isDarkMode: boolean): CSSProperties => ({
  background: isDarkMode 
    ? 'linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(26, 26, 46, 0.8) 50%, rgba(22, 33, 62, 0.9) 100%)'
    : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
  borderTop: isDarkMode 
    ? '1px solid rgba(71, 85, 105, 0.3)'
    : '1px solid #dee2e6',
  padding: '3rem 0 2rem',
  marginTop: '4rem',
  backdropFilter: 'blur(10px)',
  width: '100%',
  marginLeft: '0',
  marginRight: '0',
  position: 'relative'
});

export const getFooterContentStyles = (isDarkMode: boolean): CSSProperties => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  textAlign: 'center'
});

export const getEmailSectionStyles = (isDarkMode: boolean): CSSProperties => ({
  marginBottom: '2rem'
});

export const getFooterTitleStyles = (isDarkMode: boolean): CSSProperties => ({
  color: isDarkMode ? '#60a5fa' : '#007bff',
  fontSize: '1.5rem',
  marginBottom: '1rem',
  fontWeight: '600'
});

export const getEmailLinkStyles = (isDarkMode: boolean): CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: isDarkMode ? '#cbd5e1' : '#6c757d',
  fontSize: '1.1rem',
  fontWeight: '500',
  padding: '0.8rem 1.5rem',
  borderRadius: '12px',
  border: isDarkMode 
    ? '1px solid rgba(96, 165, 250, 0.2)' 
    : '1px solid rgba(0, 123, 255, 0.2)',
  background: isDarkMode 
    ? 'rgba(96, 165, 250, 0.1)' 
    : 'rgba(0, 123, 255, 0.1)',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(10px)'
});

export const getEmailIconStyles = (isDarkMode: boolean): CSSProperties => ({
  marginRight: '0.5rem',
  fontSize: '1.2rem'
});

export const getDividerStyles = (isDarkMode: boolean): CSSProperties => ({
  width: '100px',
  height: '2px',
  background: isDarkMode 
    ? 'linear-gradient(90deg, transparent, #60a5fa, transparent)'
    : 'linear-gradient(90deg, transparent, #007bff, transparent)',
  margin: '2rem auto',
  borderRadius: '1px'
});

export const getCopyrightStyles = (isDarkMode: boolean): CSSProperties => ({
  marginTop: '1rem'
});

export const getCopyrightTextStyles = (isDarkMode: boolean): CSSProperties => ({
  color: isDarkMode ? '#94a3b8' : '#6c757d',
  fontSize: '0.9rem',
  margin: '0'
});

export const footerVariants = {
  default: (isDarkMode: boolean) => ({
    container: getFooterContainerStyles(isDarkMode),
    content: getFooterContentStyles(isDarkMode),
    emailSection: getEmailSectionStyles(isDarkMode),
    title: getFooterTitleStyles(isDarkMode),
    emailLink: getEmailLinkStyles(isDarkMode),
    emailIcon: getEmailIconStyles(isDarkMode),
    divider: getDividerStyles(isDarkMode),
    copyright: getCopyrightStyles(isDarkMode),
    copyrightText: getCopyrightTextStyles(isDarkMode),
  }),
};
