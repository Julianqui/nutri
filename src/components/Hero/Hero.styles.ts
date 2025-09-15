import { CSSProperties } from 'react';

export const getHeroStyles = (isDarkMode: boolean): CSSProperties => ({
  // Los estilos del hero se manejan principalmente con CSS classes
  // pero podemos agregar estilos dinámicos aquí si es necesario
});

export const getTechStackStyles = (isDarkMode: boolean): CSSProperties => ({
  marginTop: '2rem',
  textAlign: 'center',
});

export const getTechLabelStyles = (isDarkMode: boolean): CSSProperties => ({
  marginBottom: '1rem',
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#60a5fa',
});

export const getTechBadgesContainerStyles = (isDarkMode: boolean): CSSProperties => ({
  gap: '1rem',
  flexWrap: 'wrap',
});

export const heroVariants = {
  default: (isDarkMode: boolean) => ({
    hero: getHeroStyles(isDarkMode),
    techStack: getTechStackStyles(isDarkMode),
    techLabel: getTechLabelStyles(isDarkMode),
    techBadgesContainer: getTechBadgesContainerStyles(isDarkMode),
  }),
};
