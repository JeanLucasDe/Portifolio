import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import meicomsiteimage from "../imagens/logo.png"

const projects = [
  {
    name: 'Mei Com Site',
    image: meicomsiteimage,
    description: 'O MeiComSite é uma plataforma para MEIs, oferecendo cadastro de serviços e relatórios de agendamento.',
    link: 'https://sitemei.netlify.app/'
  }
];

function Projects() {
  return (
    <section id="projects" className="Projects">
      <h2>Projetos</h2>
      <div className="project_carousel">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;