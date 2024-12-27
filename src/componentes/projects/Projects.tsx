import React from 'react';
import projects from '../projects/projectsData';
import './Project.css';

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section">
      <h2>Proyectos</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <img src={project.img} alt={`Proyecto ${project.id}`} />
            <button onClick={() => window.open(project.link, '_blank')}>Saber más</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
