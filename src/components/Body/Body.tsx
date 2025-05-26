import { useEffect } from 'react';
import './Body.css';

function Body() {
  useEffect(() => {
    // Efecto de aparición suave al cargar
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <main className="main-body">
      {/* Hero Section con efecto parallax */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="text-pop-up">Revolucionando el Futuro Digital</h1>
          <p className="lead-text slide-in-right">
            En <strong>SuperOne</strong>, no solo desarrollamos software: creamos ecosistemas digitales 
            que transforman negocios y mejoran vidas.
          </p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* About Section con cards animadas */}
      <section className="about-section">
        <h2 className="section-title fade-in">Sobre Nosotros</h2>
        <div className="about-grid">
          <div className="about-card fade-in" style={{ transitionDelay: '0.1s' }}>
            <div className="card-icon">👁️</div>
            <h3>Visión</h3>
            <p>
              Ser el motor de innovación tecnológica en Latinoamérica, democratizando el acceso 
              a soluciones digitales de clase mundial para empresas de todos los tamaños.
            </p>
          </div>
          
          <div className="about-card fade-in" style={{ transitionDelay: '0.3s' }}>
            <div className="card-icon">🎯</div>
            <h3>Misión</h3>
            <p>
              Desarrollar software inteligente que simplifique operaciones, optimice recursos 
              y genere crecimiento sostenible para nuestros clientes.
            </p>
          </div>
          
          <div className="about-card fade-in" style={{ transitionDelay: '0.5s' }}>
            <div className="card-icon">❤️</div>
            <h3>Valores</h3>
            <p>
              <strong>Innovación disruptiva</strong> · <strong>Seguridad inquebrantable</strong> · 
              <strong> Experiencia centrada en el usuario</strong> · <strong>Impacto social positivo</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section con efecto hover */}
      <section className="cta-section fade-in">
        <div className="cta-container">
          <h2 className="text-gradient">¿Listo para la transformación digital?</h2>
          <p>
            En SuperOne combinamos <strong>tecnología puntera</strong> con <strong>comprensión empresarial</strong> para ofrecerte 
            no solo herramientas, sino ventajas competitivas reales.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Body;