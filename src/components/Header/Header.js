import React, { useState } from 'react';
import InlineSVG from 'svg-inline-react';
import Particles from 'particlesjs';
import './Header.css';

import Navbar from '../Navbar/Navbar';


window.onload = function() {
  Particles.init({
    selector: '.background',
  });
};

function Header(props) {
  const [roles] = useState(
    [
      {id: 1, role: 'Software Engineer', color: '#77EAC5'},
      {id: 2, role: 'Web Developer', color: '#FED66A'},
      {id: 3, role: 'Full-Stack Developer', color: '#2CC9E1'},
      {id: 4, role: 'Blockchain Engineer', color: '#FC5AA4'},
      {id: 5, role: 'Technology Enthusiast', color: '#BC7FFC'},
      {id: 6, role: 'Coding Sensei', color: '#E14627'}
    ]
  );


  return (
    <header id="header" className="header flex column">

      <Navbar logo={props.logo} home={props.home} refresh={props.refresh}/>

      <section className="hero flex text-center">
        <div className="hero-body flex column">
          <div className="hero-text flex column">
            <h1 className="title">Front-end Developer & Blockchain Engineer</h1>
            <h2 className="subtitle text-muted">With a knack for creating elegantly smooth and stylish products.</h2>
          </div>

          <InlineSVG src={props.logo} className="logo"/>
        </div>
      </section>

      <div className="roles flex">
        {roles.map(role => {
          return  <div key={role.id} className="role flex column">
                    <div className="role-top flex" style={{backgroundColor: role.color}}></div>
                    <p className="text-muted">{role.role}</p>
                  </div>
        })}
      </div>

      <canvas className="background"></canvas>
    </header>
  );
}

export default Header;
