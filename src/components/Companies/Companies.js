import React from 'react';
import './Companies.css';


function Companies() {
  return (
    <section id="companies">
      <div className="Companies container flex has-padding">

        <div className="Companies-content flex has-desktop-margin">
          <div className="Companies-text flex column">
            <h1 className="title">Some of the <span className="has-text-primary">amazing</span> <br />companies i've worked with</h1>
            <h4 className="text-thin">In my career of web development,<br /> I've happened to meet some really cool people along the way.</h4>
          </div>

          <div className="Companies-body flex"></div>
        </div>

      </div>
    </section>
  )
}

export default Companies;
