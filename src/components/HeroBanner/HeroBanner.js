import React from "react";

import "./HeroBanner.scss";

const HeroBanner = () => {
  
  return (
    <section
      className="'HeroBanner"
    >
      <div className="HeroBanner--textbox">
        <h1 className="HeroBanner--primary">
          <span className="HeroBanner--primary--main">{"<Welcome />"}</span>
          <span className="HeroBanner--primary--sub">
            created by Andy Martinez{" "}
          </span>
          <span className="HeroBanner--primary--sub2">
            Pega Certified Senior System Architect
          </span>
        </h1>

        <a href="#projects" 
          className="btn btn--white"
          title="link to projects section">
          see more
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;