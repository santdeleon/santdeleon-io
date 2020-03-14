import React from 'react';

import HostGator from '../../assets/img/hostgator-logo.svg';
import Martian from '../../assets/img/martian-text-logo.svg';
import Homies from '../../assets/img/homies-logo.png';
import Terra from '../../assets/img/terra-ats-logo.png';

import './Portfolio.css';

function Portfolio(props) {

  return (
    <div id="Portfolio" className="Portfolio container">
      <div className="portfolio-wrapper flex flex-column align-items-center">

        <div className="project-row w-100 flex align-items-center justify-content-center">
          <a id="hostgatorProjectCard" className="hostgator-project-card project flex align-items-center" href="#">
              <div className="project-details flex flex-column align-items-start justify-content-between">
                <div className="flex">
                  <img className="project-logo" src={HostGator} alt="" />
                </div>

                <p className="project-text my-2 fw-bold">A platform for entrepeuners and businesses to create, host and manage websites</p>

                <div className="project-footer flex-column align-items-center">
                  <h4 className="project-industry-title mb-1 fw-bold">Industry</h4>
                  <h4 className="project-industry m-0 fw-lighter">Domain & Web Hosting</h4>
                </div>
              </div>
          </a>

            <a id="martianProjectCard" className="martian-project-card project flex align-items-center" href="#">
                <div className="project-details flex flex-column align-items-start justify-content-between">
                  <div className="flex">
                    <img className="project-logo" src={Martian} alt="" />
                  </div>
                  <h3 className="project-text my-2 fw-bold">Decentralized Blockchain solution for monetizing, distributing and hosting content</h3>

                  <div className="project-footer flex-column align-items-center">
                    <h4 className="project-industry-title mb-1 fw-bold">Industry</h4>
                    <h4 className="project-industry m-0 fw-lighter">Blockchain & Content Management</h4>
                  </div>
                </div>
            </a>

        </div>

        <div className="project-row w-100 flex align-items-center justify-content-center">
            <a id="terraProjectCard" className="terra-project-card project flex align-items-center" href="#">
                <div className="project-details flex flex-column align-items-start justify-content-between">
                  <img className="project-logo" src={Terra} width={100} alt="" />
                  <h3 className="project-text my-2 fw-bold">A small in-house tech solution for custom software applications</h3>

                  <div className="project-footer flex-column align-items-center">
                    <h4 className="project-industry-title mb-1 fw-bold">Industry</h4>
                    <h4 className="project-industry m-0 fw-lighter">Software Services & IT Solutions</h4>
                  </div>
                </div>
            </a>

            <a id="homiesProjectCard" className="homies-project-card project flex align-items-center" href="#">
                <div className="project-details flex flex-column align-items-start justify-content-between">
                  <img className="project-logo" src={Homies} width={80} alt="" />
                  <p className="project-text my-2 fw-bold">Grassroots startup aimed at helping brands get off the ground and sell online or rebrand their business</p>

                  <div className="project-footer flex-column align-items-center">
                    <h4 className="project-industry-title mb-1 fw-bold">Industry</h4>
                    <h4 className="project-industry m-0 fw-lighter">Branding & E-Commerce</h4>
                  </div>
                </div>
            </a>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
