import React from 'react';
import './Header.css';
//import homeIcon from '../../imagenes/3d-house.png';
//import aboutIcon from '../../imagenes/request.png';
//import projectsIcon from '../../imagenes/project-management.png';
//import contactIcon from '../../imagenes/customer-service.png';

const homeIcon = "https://imaganesportafolio.s3.us-east-2.amazonaws.com/imagenes/3d-house.png";
const aboutIcon = "https://imaganesportafolio.s3.us-east-2.amazonaws.com/imagenes/request.png";
const projectsIcon = "https://imaganesportafolio.s3.us-east-2.amazonaws.com/imagenes/project-management.png";
const contactIcon = "https://imaganesportafolio.s3.us-east-2.amazonaws.com/imagenes/customer-service.png";

interface HeaderProps {
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveSection }) => {
  return (
    <section id="header" className="header-section">
    <header className="header">
      <div className="logo">Eladio Castañeda</div>
      <nav className="nav-links">
        <span className="nav-link" onClick={() => setActiveSection('home')}>
          <img src={homeIcon} alt="Inicio" className="nav-icon" />
          Inicio
        </span>
        <span className="nav-link" onClick={() => setActiveSection('about')}>
          <img src={aboutIcon} alt="Sobre mí" className="nav-icon" />
          Sobre mí
        </span>
        <span className="nav-link" onClick={() => setActiveSection('projects')}>
          <img src={projectsIcon} alt="Proyectos" className="nav-icon" />
          Proyectos
        </span>
        <span className="nav-link" onClick={() => setActiveSection('contact')}>
          <img src={contactIcon} alt="Contacto" className="nav-icon" />
          Contacto
        </span>
      </nav>
      <div className="menu-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g data-name="Layer 2" fill="#9197AE">
            <g data-name="menu-2">
              <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
              <circle cx="4" cy="12" r="1"/>
              <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/>
              <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"/>
              <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"/>
            </g>
          </g>
        </svg>
      </div>
    </header>
    </section>
  );
};

export default Header;
