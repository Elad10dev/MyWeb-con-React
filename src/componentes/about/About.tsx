import React from 'react';
import profilePic from '../../imagenes/yo.jpg';
import './About.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <img src={profilePic} alt="Mi foto" className="large-profile-pic" />
        <h1 className="about-name">Tu Nombre</h1>
        <div className="about-description">
          <p>Soy un apasionado desarrollador web con experiencia en varias tecnologías. Me encanta aprender y mejorar mis habilidades constantemente. Aquí comparto un poco más sobre mi viaje en el mundo del desarrollo web, mis intereses y mis logros.</p>
          <p>He trabajado con diversas tecnologías como JavaScript, TypeScript, HTML, CSS, React, y muchas más. Mi objetivo es seguir creciendo como desarrollador y contribuir a proyectos innovadores.</p>
          <p>En mi tiempo libre, disfruto explorar nuevas tecnologías, leer sobre tendencias en la industria, y colaborar en proyectos de código abierto. Mi misión es utilizar la tecnología para hacer del mundo un lugar mejor.</p>
          <a href="#contact" className="more-info">Contáctame para saber más</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
