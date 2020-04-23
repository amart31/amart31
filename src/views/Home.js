import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

import { Projects } from '../components/Projects/Projects';
import  { ProjectsData } from '../components/Projects/ProjectsData'

import { About } from '../components/About/About';

import { HeroBanner } from '../components/HeroBanner/HeroBanner';

export function Home() {
  const projects = ProjectsData.map((project, i) => {
    return (
      <Projects
        title={project.title}
        text={project.text}
        imgSrc={project.imgSrc}
        imgSrcM={project.imgSrcM}
        imgAlt={project.imgAlt}
        link={project.link}
        btnTxt={project.btnTxt}
        side={i}
        key={i}
        />
    );
  });
  return (
    <React.Fragment>
      <Navbar />
      <HeroBanner />
      {projects}
      <About />
      <Footer />
    </React.Fragment>
  );
}