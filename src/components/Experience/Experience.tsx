'use client';

import React from 'react';
import { experienceVariants } from './Experience.styles';

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
