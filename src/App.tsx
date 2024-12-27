import React, { useState } from 'react';
import Header from './componentes/header/Header';
import HeroSection from './componentes/herosection/HeroSection';
import About from './componentes/about/About';
import Projects from './componentes/projects/Projects';
import Contact from './componentes/contact/Contact';
import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
    </div>
  );
};

export default App;
