import React, {useState} from 'react';
import InlineSVG from 'svg-inline-react';

import './Skills.css';

const laptopIcon = `<?xml version="1.0" encoding="UTF-8"?><svg class="card-icon laptop-icon" viewBox="0 0 640 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>laptop-code-solid</title><desc>Created with Sketch.</desc><defs></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="laptop-code-solid" fill="#FC4C8F" fill-rule="nonzero"><path d="M255.03,261.65 C261.28,267.9 271.41,267.9 277.66,261.65 L288.97,250.34 C295.22,244.09 295.22,233.96 288.97,227.71 L253.25,192 L288.96,156.28 C295.21,150.03 295.21,139.9 288.96,133.65 L277.65,122.34 C271.4,116.09 261.27,116.09 255.02,122.34 L196.68,180.68 C190.43,186.93 190.43,197.06 196.68,203.31 L255.03,261.65 Z M351.04,250.35 L362.35,261.66 C368.6,267.91 378.73,267.91 384.98,261.66 L443.32,203.32 C449.57,197.07 449.57,186.94 443.32,180.69 L384.98,122.35 C378.73,116.1 368.6,116.1 362.35,122.35 L351.04,133.66 C344.79,139.91 344.79,150.04 351.04,156.29 L386.75,192 L351.04,227.72 C344.79,233.97 344.79,244.1 351.04,250.35 Z M624,416 L381.54,416 C380.8,435.81 366.83,448 348.8,448 L288,448 C269.31,448 254.98,430.53 255.23,416 L16,416 C7.2,416 0,423.2 0,432 L0,448 C0,483.2 28.8,512 64,512 L576,512 C611.2,512 640,483.2 640,448 L640,432 C640,423.2 632.8,416 624,416 Z M576,48 C576,21.6 554.4,0 528,0 L112,0 C85.6,0 64,21.6 64,48 L64,384 L576,384 L576,48 Z M512,320 L128,320 L128,64 L512,64 L512,320 Z"></path></g></g></svg>`;
const ethereumIcon = `<?xml version="1.0" encoding="UTF-8"?><svg class="card-icon" viewBox="0 0 304 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>ethereum-brands</title><desc>Created with Sketch.</desc><defs></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ethereum-brands" fill="#FC4C8F" fill-rule="nonzero"><path d="M303.9,260.8 L152,353.6 L0,260.8 L152,0 L303.9,260.8 Z M152,383.4 L0,290.6 L152,512 L304,290.6 L152,383.4 Z"></path></g></g></svg>`;
const ninjaIcon = `<?xml version="1.0" encoding="UTF-8"?><svg class="card-icon" viewBox="0 0 448 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>user-ninja-solid</title><desc>Created with Sketch.</desc><defs></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="user-ninja-solid" fill="#FC4C8F" fill-rule="nonzero"><path d="M325.4,289.2 L224,390.6 L122.6,289.2 C54,295.3 0,352.2 0,422.4 L0,464 C0,490.5 21.5,512 48,512 L400,512 C426.5,512 448,490.5 448,464 L448,422.4 C448,352.2 394,295.3 325.4,289.2 Z M32,192 C59.3,192 83.8,180.5 101.2,162.3 C116.3,216.2 165.2,256 224,256 C294.7,256 352,198.7 352,128 C352,57.3 294.7,0 224,0 C173.6,0 130.4,29.4 109.5,71.8 C92.1,47.8 64,32 32,32 C32,65.4 49.1,94.8 75.1,112 C49.1,129.2 32,158.6 32,192 Z M176,96 L272,96 C289.7,96 304,110.3 304,128 L144,128 C144,110.3 158.3,96 176,96 Z"></path></g></g></svg>`;


function Skills(props) {
  const [allSkills] = useState({
    frontend: {
      id: 0,
      name: 'Front-end Developer',
      icon: laptopIcon,
      text: "Style, vibrance, and pizzaz with a touch of minimilism is what I like to go for when creating and designing for the front-end.",
      tagline: 'Languages I Speak:',
      skills: [
        'HTML', 'React', 'JavaScript', 'CSS', 'jQuery',
        'Pug', 'MongoDB', 'Express', 'Bootstrap', 'Bulma',
        'French Speaking'
      ]
    },
    blockchain: {
      id: 1,
      icon: ethereumIcon,
      name: 'Blockchain Engineer',
      text: "When I'm not doing web design I'm working solo or collaboratively in the Blockchain space creating & testing on the Ethereum Network.",
      tagline: 'Blockchain Tools:',
      skills: [
        'Solidity', 'Web3', 'Truffle', 'Ganache', 'Open Zepplin',
        'RemixIDE', 'EthFiddle', 'Infura', 'Atom', 'GitHub',
        'Ethereum Stack Exchange'
      ]
    },
    teaching: {
      id: 2,
      icon: ninjaIcon,
      name: 'Coding Sensei',
      text: "I've had alot of help from great people in my coding journey and it only feels right to give back in the same way.",
      tagline: 'What I Teach:',
      skills: [
        'Scratch', 'HTML', 'CSS', 'JavaScript', 'Java',
        'C/C++', 'Robotics', 'Artificial Intelligence',
        'Blockchain', 'Game Development', 'Mobile Apps', 'iOS & Android'
      ]
    },
  });


  return (
    <section id="skills">
      <div className="container flex">
        <div className="cards flex has-desktop-margin">

        {Object.keys(allSkills).map(skills => {
          return (
            <div key={allSkills[skills].id} className="card container flex column">
              <InlineSVG src={allSkills[skills].icon}/>

              <div className="card-body flex column text-center">
                <h4 className="card-title">{allSkills[skills].name}</h4>
                <p className="card-text container text-thin text-center">{allSkills[skills].text}</p>

                <div className="card-menu flex column text-center">
                  <h4 className="card-title has-text-primary">{allSkills[skills].tagline}</h4>

                  <ul className="card-list flex column">
                    {allSkills[skills].skills.map((s, i) => {
                      return <li key={i} className="text-thin">{s}</li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
