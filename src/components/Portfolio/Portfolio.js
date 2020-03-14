import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';

import HostGator from '../../assets/img/hostgator-logo.svg';
import Martian from '../../assets/img/martian-text-logo.svg';
import Homies from '../../assets/img/homies-logo.png';
import Terra from '../../assets/img/terra-ats-logo.png';

import './Portfolio.css';


function Portfolio(props) {
  const projects = {
    hostgator: {
      id: 'hostgatorProjectCard', class: 'hostgator-project-card', url: '#', img: HostGator,
      width: 120, height: 50, text: 'Platform for entrepeuners <br /> & businesses to create,<br /> host & manage websites', industry: 'Domain & Web Hosting'
    },
    terra: {
      id: 'terraProjectCard', class: 'terra-project-card', url: '#', img: Terra,
      width: 90, height: 50, text: 'Small in-house tech <br /> solution for custom <br /> software applications', industry: 'Software Services & IT Solutions'
    },
    homies: {
      id: 'homiesProjectCard', class: 'homies-project-card', url: '#', img: Homies,
      width: 70, height: 50, text: 'Grassroots startup helping <br /> brands get off the ground <br /> & sell online', industry: 'Branding & E-Commerce'
    },
    martian: {
      id: 'martianProjectCard', class: 'martian-project-card', url: '#', img: Martian,
      width: 120, height: 50, text: 'Blockchain solution for <br /> monetizing, distributing <br /> & hosting content', industry: 'Blockchain & Content Management'
    }
  }

  return (
    <div id="Portfolio" className="Portfolio container">
      <div className="portfolio-wrapper flex flex-column align-items-center">
        <div className="project-row w-100 flex align-items-center justify-content-center">
          {Object.keys(projects).map((project, index) => {
            if (index < 2) {
              return  <ProjectCard
                        name={project}
                        key={projects[project].id}
                        id={projects[project].id}
                        class={projects[project].class}
                        url={projects[project].url}
                        img={projects[project].img}
                        width={projects[project].width}
                        height={projects[project].height}
                        text={projects[project].text}
                        industry={projects[project].industry}
                      />
            }
          })}
        </div>

        <div className="project-row w-100 flex align-items-center justify-content-center">
          {Object.keys(projects).map((project, index) => {
            if (index >= 2) {
              return  <ProjectCard
                        name={project}
                        key={projects[project].id}
                        id={projects[project].id}
                        class={projects[project].class}
                        url={projects[project].url}
                        img={projects[project].img}
                        width={projects[project].width}
                        height={projects[project].height}
                        text={projects[project].text}
                        industry={projects[project].industry}
                      />
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
