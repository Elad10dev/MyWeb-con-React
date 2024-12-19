import React from 'react';
import { FaDatabase, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importación de iconos desde 'react-icons/fa'
import { SiTypescript, SiJavascript, SiHtml5, SiMysql, SiPostgresql, SiCss3, SiPython } from 'react-icons/si';
import profilePic from '../imagenes/yo.jpg';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="section about-me">
        <img src={profilePic} alt="Mi foto" className="profile-pic" />
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
            <FaDatabase />
            <SiTypescript />
            <SiJavascript />
            <SiHtml5 />
            <SiMysql />
            <SiPostgresql />
            <SiCss3 />
            <SiPython />
          </div>
        </div>
        <div className="contact">
          <h3>Contacto</h3>
          <div className="icons">
            <a href="mailto:tucorreo@ejemplo.com"><FaEnvelope /></a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/tuusuario" target="_blank"><FaGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
