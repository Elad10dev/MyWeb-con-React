import React, { useState } from 'react';
import Header from './componentes/Header';
import HeroSection from './componentes/HeroSection';
import About from './componentes/About';
import Projects from './componentes/Projects';
import Contact from './componentes/Contact';
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
