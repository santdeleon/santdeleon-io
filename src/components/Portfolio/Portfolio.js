import React from 'react';

import HostGator from '../../assets/img/hostgator-logo.svg'

import './Portfolio.css';

function Portfolio(props) {

  return (
    <div id="Portfolio" className="Portfolio container">
      <div className="portfolio-wrapper flex align-items-center">

        <div className="project-row w-100 flex align-items-center justify-content-center">
            <a id="hostgatorProjectCard" className="hostgator-project-card project flex align-items-center" href="#">
                <div className="project-details flex flex-column align-items-start justify-content-between">
                  <img className="project-logo" src={HostGator} alt="" />
                  <h3 className="project-text my-2 fw-bold">Domain & web hosting platform for small to medium businesses</h3>

                  <div className="project-footer flex-column align-items-center">
                    <h4 className="project-industry-title mb-1 fw-bold">Industry</h4>
                    <h4 className="project-industry m-0 fw-lighter">Domain & Web Hosting</h4>
                  </div>
                </div>
            </a>

            <a id="hostgatorProjectCard" className="hostgator-project-card project flex align-items-center" href="#">
                <div className="project-details flex flex-column align-items-start justify-content-between">
                  <img className="project-logo" src={HostGator} alt="" />
                  <h3 className="project-text my-2 fw-bold">Domain & web hosting platform for small to medium businesses</h3>

                  <div className="project-footer flex-column align-items-center">
                    <h4 className="project-industry-title mb-1 fw-bold">Industry</h4>
                    <h4 className="project-industry m-0 fw-lighter">Domain & Web Hosting</h4>
                  </div>
                </div>
            </a>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
