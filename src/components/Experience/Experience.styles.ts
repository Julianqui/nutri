import { CSSProperties } from 'react';

export const getExperienceContainerStyles = (isDarkMode: boolean): CSSProperties => ({
  marginTop: '4rem',
  textAlign: 'center',
  background: isDarkMode 
    ? 'linear-gradient(135deg, rgba(15, 15, 35, 0.8) 0%, rgba(26, 26, 46, 0.6) 50%, rgba(22, 33, 62, 0.8) 100%)'
    : '#ffffff',
  padding: '3rem 0',
  borderRadius: '20px',
  border: isDarkMode 
    ? '1px solid rgba(71, 85, 105, 0.2)'
    : '1px solid #dee2e6',
  backdropFilter: 'blur(10px)',
  boxShadow: isDarkMode 
    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
    : '0 8px 32px rgba(0, 0, 0, 0.1)'
});

export const getExperienceTitleStyles = (isDarkMode: boolean): CSSProperties => ({
  color: isDarkMode ? '#60a5fa' : '#000000',
  fontSize: '2.5rem',
  marginBottom: '3rem'
});

export const getExperienceContentStyles = (isDarkMode: boolean): CSSProperties => ({
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 2rem'
});

export const getExperienceCardStyles = (isDarkMode: boolean): CSSProperties => ({
  background: isDarkMode 
    ? 'rgba(30, 41, 59, 0.6)' 
    : '#f8f9fa',
  border: isDarkMode 
    ? '1px solid rgba(71, 85, 105, 0.3)' 
    : '1px solid #dee2e6',
  borderRadius: '12px',
  padding: '2rem',
  marginBottom: '2rem',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
});

export const getExperienceHeaderStyles = (isDarkMode: boolean): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem'
});

export const getCompanyIconStyles = (isDarkMode: boolean): CSSProperties => ({
  width: '50px',
  height: '50px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1rem',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: 'white'
});

export const getJobTitleStyles = (isDarkMode: boolean): CSSProperties => ({
  color: '#ffffff',
  margin: '0',
  fontSize: '1.3rem'
});

export const getCompanyNameStyles = (isDarkMode: boolean): CSSProperties => ({
  color: '#cbd5e1',
  margin: '0',
  fontSize: '1rem'
});

export const getDurationStyles = (isDarkMode: boolean): CSSProperties => ({
  background: 'rgba(96, 165, 250, 0.1)',
  color: isDarkMode ? '#ffffff' : '#000000',
  padding: '0.3rem 0.8rem',
  borderRadius: '12px',
  fontSize: '0.9rem',
  border: '1px solid rgba(96, 165, 250, 0.2)'
});

export const getLocationStyles = (isDarkMode: boolean): CSSProperties => ({
  color: '#cbd5e1',
  fontSize: '0.9rem',
  marginBottom: '1rem'
});

export const getDescriptionStyles = (isDarkMode: boolean): CSSProperties => ({
  marginBottom: '1.5rem'
});

export const getDescriptionTextStyles = (isDarkMode: boolean): CSSProperties => ({
  color: '#cbd5e1',
  lineHeight: '1.6',
  marginBottom: '0.8rem'
});

export const getSkillsContainerStyles = (isDarkMode: boolean): CSSProperties => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem'
});

export const getSkillBadgeStyles = (isDarkMode: boolean): CSSProperties => ({
  background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)',
  color: isDarkMode ? '#ffffff' : '#007bff',
  padding: '0.3rem 0.8rem',
  borderRadius: '12px',
  fontSize: '0.8rem'
});

export const experienceVariants = {
  default: (isDarkMode: boolean) => ({
    container: getExperienceContainerStyles(isDarkMode),
    title: getExperienceTitleStyles(isDarkMode),
    content: getExperienceContentStyles(isDarkMode),
    card: getExperienceCardStyles(isDarkMode),
    header: getExperienceHeaderStyles(isDarkMode),
    companyIcon: getCompanyIconStyles(isDarkMode),
    jobTitle: getJobTitleStyles(isDarkMode),
    companyName: getCompanyNameStyles(isDarkMode),
    duration: getDurationStyles(isDarkMode),
    location: getLocationStyles(isDarkMode),
    description: getDescriptionStyles(isDarkMode),
    descriptionText: getDescriptionTextStyles(isDarkMode),
    skillsContainer: getSkillsContainerStyles(isDarkMode),
    skillBadge: getSkillBadgeStyles(isDarkMode),
  }),
};
