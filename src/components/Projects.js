import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import meicomsiteimage from "../imagens/logo.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const projects = [
  {
    name: 'Mei Com Site',
    image: meicomsiteimage,
    description: 'O MeiComSite é uma plataforma para MEIs, oferecendo cadastro de serviços e relatórios de agendamento.',
    link: 'https://sitemei.netlify.app/'
  },
  {
    name: 'Site de Perguntas',
    image: "https://img.freepik.com/free-vector/orange-question-mark-background-with-text-space_1017-27394.jpg?size=626&ext=jpg&ga=GA1.1.995514839.1678974862&semt=sph",
    description: 'Projeto Pessoal',
    link: 'https://suapergunta.netlify.app/'
  },
  {
    name: 'Consultor de Clima',
    image: "https://img.freepik.com/free-vector/weather-extended-forecast-computer-paper-decorative-widgets-with-sun-clouds-rain-snow-icons-vector-illustration_1284-2182.jpg?w=740&t=st=1679864217~exp=1679864817~hmac=91d56de584b6249b5f10162d3721c4985bfe8f31e3bc7c9dedb5671c53b9b588",
    description: 'Aplicação consumindo Recursos de uma API de clima',
    link: 'https://portifoliojeanlucas.netlify.app/projeto/2'
  },
  {
    name: "To do List",
    image: "https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=740&t=st=1679864254~exp=1679864854~hmac=ca693c1d191f7a1453a119c6c71eb04f64fd29c3b1ec13aec1e4510237fc051b",
    description: 'Clássico, lista de Tarefas, um CRUD.',
    link: 'https://portifoliojeanlucas.netlify.app/projeto/3'
  },
  {
    name: 'Clona de Login do Facebook',
    image: "https://img.freepik.com/free-vector/hand-drawn-community-spirit-illustration_52683-109034.jpg?w=740&t=st=1679864424~exp=1679865024~hmac=6153ff3b7b1c2c3c99a174417a8db7cd15b28af462e68fae9b27c6fce6b4ebff",
    description: 'Práticas de HTML e CSS',
    link: 'https://portifoliojeanlucas.netlify.app/projeto/7'
  },
  {
    name: 'Página de Conselhos',
    image: "https://img.freepik.com/free-vector/consultative-sales-concept-illustration_114360-7508.jpg?t=st=1679864303~exp=1679864903~hmac=33685e1df8b109f984072652fce58953394a9966ed9286f4b05fe10f98d5f90a",
    description: 'Quem não precisa de conselhos? Aplicação utitlizando uma API',
    link: 'https://portifoliojeanlucas.netlify.app/projeto/6'
  },
  {
    name: 'Clone Airbnb',
    image: "https://img.freepik.com/free-photo/wooden-keychain-white_53876-94384.jpg?w=740&t=st=1688509504~exp=1688510104~hmac=08795771dded75b71bb5d2e3bb7a71157f2381d49c6505210f714aac45eaf3eb",
    description: 'Cópia da pagina home do airbnb',
    link: 'https://portifoliojeanlucas.netlify.app/projeto/8'
  }
];

function Projects() {
  return (
    <section id="projects" className="Projects">
      <h2>Projetos</h2>
      <div className='container'>
        <Swiper
          spaceBetween={50}
          breakpoints={{
            '300px': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '700': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="project_carousel">
            {projects.map((project, index) => (
              <SwiperSlide>
                <ProjectCard key={index} project={project} />
              </SwiperSlide>
            ))}
          </div>
        
        </Swiper>
      </div>
      
    </section>
  );
}

export default Projects;