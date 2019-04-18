import React from 'react';
import './Companies.css';

function Companies() {
  return (
    <section id="companies">
      <div className="Companies container flex column has-desktop-margin">
        <div className="Companies-text flex column">
          <h1 className="title">Some of the <span className="has-text-primary">amazing</span> companies i've worked with</h1>
          <h2 className="subtitle">In my career of web development, I've happened to meet some really cool people along the way.</h2>
        </div>

        <div className="Companies-body flex"></div>

      </div>
    </section>
  )
}

export default Companies;
