import React, { useState } from 'react';
import './Companies.css';


function Companies() {
  const [images] = useState([
    {name: 'Host Gator', id: 0, src: require('../../assets/img/hostgator-logo.svg')},
    {name: 'Martian Network', id: 1, src: require('../../assets/img/mn.svg')},
    {name: 'Code Ninjas', id: 2, src: require('../../assets/img/codeninjas.svg')},
    {name: 'Terra ATS', id: 3, src: require('../../assets/img/terra.svg')},
    {name: 'Homies.io', id: 4, src: require('../../assets/img/homies.svg')},

  ]);


  return (
    <section id="companies">
      <div className="Companies container flex has-padding has-wave">

        <div className="Companies-content flex column has-desktop-margin">
          <div className="Companies-text flex column">
            <h1 className="title">Some of the <span className="has-text-primary">amazing</span> <br />companies i've worked with</h1>
            <h4 className="text-thin">In my career of web development,<br /> I've happened to meet some really cool people along the way.</h4>
          </div>

          <div className="Companies-body flex">
            <div className="Companies-image flex column">
              {images.map(img => {
                return <img key={img.id} src={img.src} alt={img.name}/>
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Companies;
