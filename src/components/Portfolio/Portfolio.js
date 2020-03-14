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
                    <img className="project-logo" src={HostGator} width={120} height={50} alt="" />
                  </div>

                  <p className="project-text my-4 fw-bold">Platform for entrepeuners <br/> & businesses to create,<br/> host & manage websites</p>

                  <div className="project-footer flex-column align-items-center">
                    <h4 className="project-industry-title mb-1 fw-bold">Industry</h4>
                    <h4 className="project-industry m-0 fw-lighter">Domain & Web Hosting</h4>
                  </div>
                </div>
            </a>

            <a id="terraProjectCard" className="terra-project-card project flex align-items-center" href="#">
                <div className="project-details flex flex-column align-items-start justify-content-between">
                  <img className="project-logo" src={Terra} width={90} height={50} alt="" />
                  <p className="project-text my-4 fw-bold">Small in-house tech <br/> solution for custom <br/> software applications</p>

                  <div className="project-footer flex-column align-items-center">
                    <h4 className="project-industry-title mb-1 fw-bold">Industry</h4>
                    <h4 className="project-industry m-0 fw-lighter">Software Services & IT Solutions</h4>
                  </div>
                </div>
            </a>

        </div>

        <div className="project-row w-100 flex align-items-center justify-content-center">
            <a id="homiesProjectCard" className="homies-project-card project flex align-items-center" href="#">
                <div className="project-details flex flex-column align-items-start justify-content-between">
                  <img className="project-logo" src={Homies} width={70} height={50} alt="" />
                  <p className="project-text my-4 fw-bold">Grassroots startup helping <br/> brands get off the ground <br/> & sell online</p>

                  <div className="project-footer flex-column align-items-center">
                    <h4 className="project-industry-title mb-1 fw-bold">Industry</h4>
                    <h4 className="project-industry m-0 fw-lighter">Branding & E-Commerce</h4>
                  </div>
                </div>
            </a>

            <a id="martianProjectCard" className="martian-project-card project flex align-items-center" href="#">
                <div className="project-details flex flex-column align-items-start justify-content-between">
                  <div className="flex">
                    <img className="project-logo" src={Martian} width={120} height={50} alt="" />
                  </div>
                  <p className="project-text my-4 fw-bold">Blockchain solution for <br/> monetizing, distributing <br/> & hosting content</p>

                  <div className="project-footer flex-column align-items-center">
                    <h4 className="project-industry-title mb-1 fw-bold">Industry</h4>
                    <h4 className="project-industry m-0 fw-lighter">Blockchain & Content Management</h4>
                  </div>
                </div>
            </a>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
