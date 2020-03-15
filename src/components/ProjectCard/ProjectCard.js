import React from 'react';

import './ProjectCard.css';


function ProjectCard(props) {

  return (
    <a id={props.id} className={`${props.class} project flex align-items-center`} href={props.url} target="_blank" rel="noopener noreferrer" aria-label={props.name}>
        <div className="project-details flex flex-column align-items-start justify-content-between">
          <div className="flex">
            <img className="project-logo" src={props.img} width={props.width} height={props.height} alt={props.name} />
          </div>

          <p className="project-text my-4 fw-bold" dangerouslySetInnerHTML={{__html: props.text}}></p>

          <div className="project-footer flex-column align-items-center">
            <h4 className="project-industry-title mb-1 fw-bold">Industry</h4>
            <h4 className="project-industry m-0 fw-lighter">{props.industry}</h4>
          </div>
        </div>
    </a>
  );
}

export default ProjectCard;
