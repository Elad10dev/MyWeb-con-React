import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Explorador Galáctico</h1>
      <nav>
        <a href="#home">A</a>
        <a href="#proyectos">B</a>
        <a href="#contacto">C</a>
        
      </nav>
    </header>
  );
};

export default Header;
