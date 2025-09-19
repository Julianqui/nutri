'use client';

import React from 'react';
import { experienceVariants } from './Experience.styles';

// Technology icons mapping
const techIcons: { [key: string]: string } = {
  'React': '⚛',
  'Next.js': '▲',
  'TypeScript': 'TS',
  'TailwindCSS': 'TW',
  'GraphQL': 'GQ',
  'Jest': 'JT',
  'Cypress': 'CY',
  'CSS': 'CSS',
  'Bootstrap': 'BS',
  'JavaScript': 'JS',
  'Agile/Scrum': 'AG',
  'HTML5': 'H5'
};

interface ExperienceData {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  icon: string;
  description: string[];
  skills: string[];
}

interface ExperienceProps {
  isDarkMode: boolean;
  variant?: 'default';
  className?: string;
}

const experienceData: ExperienceData[] = [
  {
    id: 'globant',
    company: 'Globant',
    position: 'Frontend Web Developer',
    duration: 'Sep 2021 - Present · 4 yrs 1 mo',
    location: 'Ciudad de Buenos Aires, Provincia de Buenos Aires, Argentina',
    icon: 'G',
    description: [
      'Developed and maintained scalable UI components for enterprise-level applications using React, TypeScript, Next.js, JavaScript, HTML5, and CSS3.',
      'Implemented design systems and styled components with TailwindCSS, Styled Components, Bootstrap, and Storybook, ensuring consistency and reusability across projects.',
      'Integrated front-end applications with GraphQL and REST APIs, improving data handling and performance.',
      'Built testing coverage with Jest, React Testing Library, and Cypress to maintain code quality.'
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'GraphQL', 'Jest', 'Cypress']
  },
  {
    id: 'ministerio',
    company: 'Ministerio de Desarrollo Productivo',
    position: 'Frontend Developer',
    duration: 'Jun 2019 - Nov 2021 · 2 yrs 6 mos',
    location: 'Buenos Aires y alrededores',
    icon: 'M',
    description: [
      'Developed and integrated responsive landing pages and UI components using CSS, Bootstrap, and JavaScript.',
      'Collaborated in an Agile/Scrum environment with cross-functional teams, leveraging tools like Taiga, Alfresco, Slack, Jitsi, and Google Meet.',
      'Improved front-end workflows, reducing delivery times for new features.',
      'Contributed to public-facing government platforms, enhancing accessibility and usability for citizens.'
    ],
    skills: ['CSS', 'Bootstrap', 'JavaScript', 'Agile/Scrum', 'HTML5']
  }
];

export default function Experience({ 
  isDarkMode, 
  variant = 'default',
  className = '' 
}: ExperienceProps) {
  const styles = experienceVariants[variant](isDarkMode);

  return (
    <div style={styles.container} className={className}>
      <h2 style={styles.title}>Mi Experiencia</h2>
      
      <div style={styles.content}>
        {experienceData.map((experience) => (
          <div key={experience.id} style={styles.card}>
            <div style={styles.header}>
              <div style={styles.companyIcon}>
                {experience.icon}
              </div>
              <div>
                <h3 style={styles.jobTitle}>{experience.position}</h3>
                <p style={styles.companyName}>{experience.company} · Full-time</p>
              </div>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <span style={styles.duration}>{experience.duration}</span>
            </div>
            
            <p style={styles.location}>{experience.location}</p>
            
            <div style={styles.description}>
              {experience.description.map((desc, index) => (
                <p key={index} style={styles.descriptionText}>
                  {desc}
                </p>
              ))}
            </div>
            
            <div style={styles.skillsContainer}>
              {experience.skills.map((skill, index) => (
                <span key={index} style={styles.skillBadge}>
                  {techIcons[skill] && (
                    <span style={{
                      marginRight: '0.4rem',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      background: 'rgba(96, 165, 250, 0.2)',
                      padding: '0.1rem 0.3rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(96, 165, 250, 0.3)'
                    }}>
                      {techIcons[skill]}
                    </span>
                  )}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
