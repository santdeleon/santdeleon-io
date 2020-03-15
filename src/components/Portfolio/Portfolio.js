import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';

import HostGator from '../../assets/img/hostgator-logo.svg';
import Martian from '../../assets/img/martian-text-logo.svg';
import Homies from '../../assets/img/homies-logo.png';
import Terra from '../../assets/img/terra-ats-logo.png';
import Ethereum from '../../assets/img/ethereum-logo.png';

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
    },
    coinflip: {
      id: 'coinflipProjectCard', class: 'coinflip-project-card', url: '#', img: Ethereum,
      width: 40, height: 40, text: 'Decentralized gambling <br /> application built on the <br /> Ethereum Network', industry: 'Blockchain, Gambling & Gaming'
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
            if (index >= 2 && index < 4) {
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
          <ProjectCard
            name={projects['coinflip'].name}
            key={projects['coinflip'].id}
            id={projects['coinflip'].id}
            class={projects['coinflip'].class}
            url={projects['coinflip'].url}
            img={projects['coinflip'].img}
            width={projects['coinflip'].width}
            height={projects['coinflip'].height}
            text={projects['coinflip'].text}
            industry={projects['coinflip'].industry}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
