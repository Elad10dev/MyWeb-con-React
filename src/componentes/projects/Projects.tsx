import React from 'react';
import projects from '../projects/projectsData';
import './Project.css';

interface ProjectsSectionProps {
  setActiveSection: (section: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ setActiveSection }) => {
  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <img src={project.img} alt={`Proyecto ${project.id}`} />
            <button
              onClick={() => {
                setActiveSection('contact');
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Saber más
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;