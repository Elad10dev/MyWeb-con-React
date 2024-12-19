import React from 'react';
import './Header.css';

interface HeaderProps {
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveSection }) => {
  return (
    <header className="header">
      <div className="logo">Explorador Galáctico</div>
      <nav className="nav-links">
        <span className="nav-link" onClick={() => setActiveSection('home')}>Inicio</span>
        <span className="nav-link" onClick={() => setActiveSection('about')}>Sobre mí</span>
        <span className="nav-link" onClick={() => setActiveSection('projects')}>Proyectos</span>
        <span className="nav-link" onClick={() => setActiveSection('contact')}>Contacto</span>
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
  );
};

export default Header;
