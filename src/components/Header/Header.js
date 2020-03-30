import React from 'react';
import { ArrowDownCircle } from 'react-feather';
import './Header.css';

import SantLight from '../../assets/img/sant-light.svg';
import SantDark from '../../assets/img/sant-dark.svg';

const skills = [
  {id: 0, name: 'Blockchain Engineer', color: "#F76F6E"},
  {id: 1, name: 'Front-end Developer', color: "#FBC07A"},
  {id: 2, name: 'UI/UX Designer-ish', color: "#FCE073"},
  {id: 3, name: 'Tech Enthusiast', color: "#A5F29F"},
  {id: 4, name: 'Aspiring Cypherpunk', color: "#82E1F3"},
];


const Header = ({theme, particles}) => {
  window.onload = function() {
    particles.init({
      selector: '.background',
      color: "#222"
    });
  };

  return (
    <div id="Header" className="Header container">
      <div className="header-wrapper flex flex-column justify-content-between">
      <div className="header-text flex flex-column">
        {(theme === 'light') ?
        <img src={SantLight} className="m-0 p-0" alt="Lightmode Header Cartoon" />
        :
        <img src={SantDark} className="m-0 p-0" alt="Darkmode Header Cartoon" />
        }
        <h1 className="header-title mb-0 mt-0">Hello, I'm Sant. Blockchain engineer and front-end developer.</h1>
        <h3 className="header-name text-muted mt-3 fw-normal">with a knack for creating cutting edge products with elegance and style.</h3>
      </div>

        <div className="skills-wrapper flex w-100 justify-content-between my-4">
          {skills.map(skill => {
              return <div key={skill.id} className="skill flex flex-column mt-5" style={(theme === "light") ? { backgroundColor: "#fff" } : { backgroundColor: "#212121" }}>
                       <div className="skill-header p-1" style={{backgroundColor: skill.color}}></div>
                       <div className="skill-body text-center py-3"><p className="p-0 m-0">{skill.name}</p></div>
                     </div>
          })}
        </div>

        <div className="scroll-btn-wrapper flex justify-content-center">
          <div className="flex flex-column justify-content-center align-items-center">
            <a className="text-center" href="#Portfolio">
              <ArrowDownCircle className="arrow-down" />
              <p className="scroll-down m-0 p-0">Scroll down</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};


export default Header;
