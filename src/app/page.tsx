'use client';

import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Theme Toggle Switch */}
      <div style={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px', 
        zIndex: 1000 
      }}>
        <button
          onClick={toggleTheme}
          style={{
            background: isDarkMode ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f0f0f0',
            border: 'none',
            borderRadius: '25px',
            padding: '10px 20px',
            color: isDarkMode ? 'white' : '#333',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          {isDarkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      <div className="hero animate-fade-in-up">
        <h1>Julian Quinteiro</h1>
        <p>Frontend developer</p>
        <div className="tech-stack" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600', color: '#60a5fa' }}>Tecnologías:</p>
          <div className="d-flex-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
            <span className="tech-badge">Next.js</span>
            <span className="tech-badge">React.js</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">Styled Components</span>
            <span className="tech-badge">Tailwind</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">React testing library</span>
            <span className="tech-badge">Jest</span>
          </div>
        </div>
      </div>
      
      <div style={{ 
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
      }}>
        <h2 style={{ 
          color: isDarkMode ? '#60a5fa' : '#000000', 
          fontSize: '2.5rem', 
          marginBottom: '3rem' 
        }}>Mi Experiencia</h2>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Experiencia 1 - Globant */}
          <div style={{
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
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
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
              }}>G</div>
              <div>
                <h3 style={{ color: '#ffffff', margin: '0', fontSize: '1.3rem' }}>Frontend Web Developer</h3>
                <p style={{ color: '#cbd5e1', margin: '0', fontSize: '1rem' }}>Globant · Full-time</p>
              </div>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <span style={{
                background: 'rgba(96, 165, 250, 0.1)',
                color: isDarkMode ? '#ffffff' : '#000000',
                padding: '0.3rem 0.8rem',
                borderRadius: '12px',
                fontSize: '0.9rem',
                border: '1px solid rgba(96, 165, 250, 0.2)'
              }}>Sep 2021 - Present · 4 yrs 1 mo</span>
            </div>
            
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Ciudad de Buenos Aires, Provincia de Buenos Aires, Argentina
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '0.8rem' }}>
                Developed and maintained scalable UI components for enterprise-level applications using React, TypeScript, Next.js, JavaScript, HTML5, and CSS3.
              </p>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '0.8rem' }}>
                Implemented design systems and styled components with TailwindCSS, Styled Components, Bootstrap, and Storybook, ensuring consistency and reusability across projects.
              </p>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '0.8rem' }}>
                Integrated front-end applications with GraphQL and REST APIs, improving data handling and performance.
              </p>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '0.8rem' }}>
                Built testing coverage with Jest, React Testing Library, and Cypress to maintain code quality.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>React</span>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>Next.js</span>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>TypeScript</span>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>TailwindCSS</span>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>GraphQL</span>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>Jest</span>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>Cypress</span>
            </div>
          </div>

          {/* Experiencia 2 - Ministerio */}
          <div style={{
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
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
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
              }}>M</div>
              <div>
                <h3 style={{ color: '#ffffff', margin: '0', fontSize: '1.3rem' }}>Frontend Developer</h3>
                <p style={{ color: '#cbd5e1', margin: '0', fontSize: '1rem' }}>Ministerio de Desarrollo Productivo · Full-time</p>
              </div>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <span style={{
                background: 'rgba(96, 165, 250, 0.1)',
                color: isDarkMode ? '#ffffff' : '#000000',
                padding: '0.3rem 0.8rem',
                borderRadius: '12px',
                fontSize: '0.9rem',
                border: '1px solid rgba(96, 165, 250, 0.2)'
              }}>Jun 2019 - Nov 2021 · 2 yrs 6 mos</span>
            </div>
            
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Buenos Aires y alrededores
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '0.8rem' }}>
                Developed and integrated responsive landing pages and UI components using CSS, Bootstrap, and JavaScript.
              </p>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '0.8rem' }}>
                Collaborated in an Agile/Scrum environment with cross-functional teams, leveraging tools like Taiga, Alfresco, Slack, Jitsi, and Google Meet.
              </p>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '0.8rem' }}>
                Improved front-end workflows, reducing delivery times for new features.
              </p>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '0.8rem' }}>
                Contributed to public-facing government platforms, enhancing accessibility and usability for citizens.
              </p>
        </div>
        
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>CSS</span>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>Bootstrap</span>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>JavaScript</span>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>Agile/Scrum</span>
              <span style={{ background: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 123, 255, 0.1)', color: isDarkMode ? '#ffffff' : '#007bff', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.8rem' }}>HTML5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card card--elevated mt-5" style={{ textAlign: 'center', padding: '3rem' }}>
        <h2 className="text--gradient mb-3">¿Listo para transformar tu nutrición?</h2>
        <p className="mb-4" style={{ fontSize: '1.1rem', color: '#666' }}>
          Únete a miles de usuarios que ya están mejorando su salud con Julian Quinteiro Frontend developer
        </p>
        <div className="d-flex-center" style={{ gap: '1rem' }}>
          <button className="btn btn--large animate-pulse">Registrarse Gratis</button>
          <button className="btn btn--outline btn--large">Contactar</button>
        </div>
      </div>
    </main>
  )
}
