import React from "react";

import "./index.css";

const PreFooter = ({ theme }) => {
  return (
    <div id="Prefooter" className="PreFooter container">
      <div className="PreFooter-text flex justify-content-center">
        <h1>
          Interested? Let's grab
          <a
            href="/contact"
            className="coffee"
            style={
              theme === "light"
                ? { borderBottom: "5px solid #000" }
                : { borderBottom: "5px solid #fff" }
            }
          >
            <span className="red">c</span>
            <span className="orange">o</span>
            <span className="yellow">f</span>
            <span className="yellow">f</span>
            <span className="green">e</span>
            <span className="blue">e</span>
            <span className="purple">!</span>
          </a>
        </h1>
      </div>
    </div>
  );
};

export default PreFooter;
