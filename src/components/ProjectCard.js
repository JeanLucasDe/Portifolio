import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="ProjectCard">
      <div className="project_image_cont">
        <img src={project.image} alt={project.name} className="project_image" />
      </div>
      <div className="project_content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project_link">Ver Projeto</a>
      </div>
    </div>
  );
}

export default ProjectCard;