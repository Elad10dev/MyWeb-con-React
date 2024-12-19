import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="section about-me">
        <img src="path/to/your-photo.jpg" alt="Mi foto" className="profile-pic" />
        <div className="description">
          <p>Soy un apasionado desarrollador web con experiencia en...</p>
          <a href="#about" className="more-info">Más sobre mí...</a>
        </div>
      </div>

      <div className="section projects">
        <h2>Proyectos</h2>
        <div className="project-slider">
          <button className="prev-project">Anterior</button>
          <div className="project">
            <img src="path/to/project1.gif" alt="Proyecto 1" />
            <div className="project-description">
              <p>Descripción breve del proyecto 1...</p>
              <a href="#projects" className="more-info">Saber más...</a>
            </div>
          </div>
          <button className="next-project">Siguiente</button>
        </div>
      </div>

      <div className="section skills-contact">
        <div className="skills">
          <h3>Habilidades</h3>
          <div className="icons">
            <img src="path/to/skill1.png" alt="Habilidad 1" />
            <img src="path/to/skill2.png" alt="Habilidad 2" />
            <img src="path/to/skill3.png" alt="Habilidad 3" />
          </div>
        </div>
        <div className="contact">
          <h3>Contacto</h3>
          <div className="icons">
            <a href="mailto:tucorreo@ejemplo.com"><img src="path/to/email-icon.png" alt="Correo" /></a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank"><img src="path/to/linkedin-icon.png" alt="LinkedIn" /></a>
            <a href="https://github.com/tuusuario" target="_blank"><img src="path/to/github-icon.png" alt="GitHub" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
