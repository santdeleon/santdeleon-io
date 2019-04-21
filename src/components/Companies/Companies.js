import React from 'react';
import './Companies.css';


function Companies() {
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
              <img src={require('../../assets/img/homies.svg')} alt="Homies.io"/>
              <img src={require('../../assets/img/codeninjas.svg')} alt="Code Ninjas"/>
              <img src={require('../../assets/img/terra.svg')} alt="Terra ATS"/>
              <img src={require('../../assets/img/hostgator-logo.svg')} alt="HostGator"/>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Companies;
