import React from 'react';
import './Hello.css';


function Hello(props) {
  return (
    <section id="hello">
      <div className="Hello container flex has-pattern-wallpaper">
        <div className="Hello-body flex column text-center">
          <h3>Hi, Im Sánt. Welcome in.</h3>
          <p className="lead text-thin">
          Since the beginning days of my programming career
          I've been developing for local startups and tech agencies,
          working freelance for consumers & clients, and collaborating
          with small teams in the blockchain space to create effervescent
          and cutting edge products. And I'm totally in love with it all.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hello;
