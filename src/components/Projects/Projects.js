import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Projects.css';


function Projects(props) {
  const [projects] = useState({
    martian: {
      id: 0,
      description: 'Website for the Amsterdam based Blockchain startup Martian Network',
      url: 'https://martian.network',
      src: require('../../assets/img/martian.png'),
      buttonText: 'Launch'
    },
    portfolio: {
      id: 1,
      description: 'The current version of this portfolio built on top of a living codebase.',
      url: 'https://github.com/santdeleon/portfolio',
      src: require('../../assets/img/portfolio.png'),
      buttonText: 'View on Github'
    },
    nirvana: {
      id: 2,
      description: 'Colorfully Modern UI/UX design concept for blockchain startups.',
      url: 'https://sant-nirvana.herokuapp.com',
      src: require('../../assets/img/nirvana.png'),
      buttonText: 'Launch'
    },
    expensify: {
      id: 3,
      description: 'A MERN stack expense software built for businesses.',
      url: 'https://github.com/santdeleon/MERN-Dashboard',
      src: require('../../assets/img/mern.png'),
      buttonText: 'View on Github'
    },
    udacimeals: {
      id: 4,
      description: 'A productivity web app for discovering meals and creating grocery lists.',
      url: 'https://sant-udacimeals.herokuapp.com',
      src: require('../../assets/img/udacimeals.png'),
      buttonText: 'Launch'
    },
    rsvp: {
      id: 5,
      description: 'An RSVP app for planning events, parties, and hangouts.',
      url: 'https://sant-rsvp.herokuapp.com',
      src: require('../../assets/img/rsvp-app.png'),
      buttonText: 'Launch'
    }
  });


  return (
    <section id="projects">
      <div className="Projects container flex has-padding">
        <div className="Projects-body flex column">
          <div className="Projects-text flex column text-center">
            <h3>My Recent Work</h3>
            <h4 className="text-thin">These are a few of my recent projects. Want to see more? <a href="mailto:sant@santdeleon.co">Email me.</a></h4>
          </div>

          <div className="hyphens"></div>

          <div className="Projects-grid flex">
            {Object.keys(projects).map(project => {
              return  <div key={projects[project].id} className="figure-container flex column">
                        <figure className="image">
                          <img className="project-thumb" src={projects[project].src} alt={projects[project]}/>
                          <figcaption>
                            <h1 className="text-center">{projects[project].description}</h1>
                            <a href={projects[project].url} className="btn flex" target="_blank" rel="noopener noreferrer">{projects[project].buttonText}</a>
                          </figcaption>
                          <div className="overlay"></div>
                        </figure>
                      </div>

            })}
          </div>

          <div className="see-more flex">
            <a className="btn flex" href="https://github.com/Santdeleon" target="_blank" rel="noopener noreferrer">
              <span><FontAwesomeIcon className="icon" icon={props.github}/></span>
              <span>See more on Github </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
