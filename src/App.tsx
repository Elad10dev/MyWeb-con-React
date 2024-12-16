import React from 'react';
import Header from './componentes/Header';
import HeroSection from './componentes/HeroSection';
import About from './componentes/About';
import Projects from './componentes/Projects';
import Contact from './componentes/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
