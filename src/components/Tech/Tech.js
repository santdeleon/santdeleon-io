import React from 'react';
import { string } from 'prop-types';

import './Tech.css';

const technologies = {
  blockchain: {
    id: 1,
    name: 'Blockchain Stack',
    color: '#f76f6e',
    tech: [ 'Solidity', 'Web3', 'React', 'JavaScript', 'HTML/CSS' ],
    tools: [ 'Remix IDE', 'OpenZepplin', 'Provable', 'Chai', 'Mocha', 'Truffle Suite', 'Ethereum mainnet and testnets' ]
  },
  frontend: {
    id: 2,
    name: 'Front-End Stack',
    color: '#fbc07a',
    tech: [ 'HTML/CSS', 'JavaScript', 'React', 'NodeJS', 'jQuery', 'KnockoutJS', 'Mocha', 'Chai', 'SCSS', 'PugJS', 'Template Toolkit', 'Bootstrap', 'Bulma', 'Materialize' ],
    tools: [ 'Atom Editor', 'iTerm', 'Yarn', 'NPM' ],
    additional: [ 'Jira', 'Slack', 'Confluence', 'Stash/Bitbucket', 'Google Hangouts', 'Zoom', 'Trello', 'Telegram' ]
  },
  backend: {
    id: 3,
    name: 'Backend Stack',
    color: '#ffdc74',
    tech: [ 'Java', 'Perl', 'VIM', 'MongoDB' ],
    tools: [ 'IntelliJ', 'Spring Boot', 'CPAN' ]
  },
};

const Tech = ({ theme }) => {

  return (
    <div id="Tech" className="Tech container" style={(theme === "light") ? { backgroundColor: "#f9f9f9" } : { backgroundColor: "#000" }}>
      <div className="tech-wrapper flex flex-column justify-content-between">
        <div className="tech-header mb-5 text-center flex flex-column">
          <h4 className="m-0 fw-light text-muted">With these technologies</h4>
          <h3 className="mb-5">I can make <span className="magic">magic</span> <br/> and do the thing</h3>
        </div>

        <div className="tech-body flex justify-content-between">
          {Object.keys(technologies).map(obj => {
            return <div key={technologies[obj].id} className={`${technologies[obj].name} stack flex flex-column`} style={(theme === "light") ? {backgroundColor: '#fff'} : { backgroundColor: ''}}>
                      <h3 className="m-0" style={{ color: technologies[obj].color }}>0{technologies[obj].id}</h3>
                      <h3 className="mt-0 stack-name" style={{ borderBottom: `3px solid ${technologies[obj].color}` }}>{technologies[obj].name}</h3>

                      <div className="flex flex-column">
                        <h4 className="mb-1 fw-light">Technologies:</h4>
                        <ul className="flex flex-column font-light">
                          {technologies[obj].tech.map((tech, i) => {
                            return <li key={i} className="text-muted">{tech}</li>
                          })}
                        </ul>

                        <h4 className="mb-1 fw-light">Tools:</h4>
                        <ul className="flex flex-column font-light">
                          {technologies[obj].tools.map((tool, i) => {
                            return <li key={i} className="text-muted">{tool}</li>
                          })}
                        </ul>
                      </div>


                      {(technologies[obj].additional) ?
                        <>
                          <h4 className="mb-1 fw-light">Additional:</h4>
                          <ul className="flex flex-column font-light">
                            {technologies[obj].additional.map((a, i) => {
                              return <li key={i} className="text-muted">{a}</li>
                            })}
                          </ul>
                        </>
                      :
                        null
                      }
                    </div>
          })}
        </div>
      </div>
    </div>
  );
}

Tech.propTypes = {
  theme: string.isRequired
};

export default Tech;
