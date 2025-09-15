export default function Home() {
  return (
    <main className="container">
      <div className="hero animate-fade-in-up">
        <h1>🥗 Julian Quinteiro</h1>
        <p>Frontend developer</p>
        <div className="tech-stack" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>Tecnologías:</p>
          <div className="d-flex-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
            <span className="tech-badge">Next.js</span>
            <span className="tech-badge">React.js</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">Styled Components</span>
            <span className="tech-badge">Tailwind</span>
            <span className="tech-badge">JavaScript</span>
          </div>
        </div>
      </div>
      
      <div className="features">
        <div className="feature-card animate-fade-in-up">
          <h3>📊 Seguimiento Nutricional</h3>
          <p>Registra y monitorea tu ingesta diaria de nutrientes con nuestra herramienta intuitiva y precisa.</p>
          <button className="btn btn--small mt-3">Más información</button>
        </div>
        
        <div className="feature-card animate-fade-in-up">
          <h3>🍎 Base de Alimentos</h3>
          <p>Accede a una amplia base de datos de alimentos con información nutricional detallada y actualizada.</p>
          <button className="btn btn--secondary btn--small mt-3">Explorar</button>
        </div>
        
        <div className="feature-card animate-fade-in-up">
          <h3>📈 Análisis de Progreso</h3>
          <p>Visualiza tu progreso con gráficos detallados y métricas personalizadas para alcanzar tus objetivos.</p>
          <button className="btn btn--accent btn--small mt-3">Ver estadísticas</button>
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
