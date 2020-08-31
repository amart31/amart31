import React from "react";
import "./About.scss";

export function About() {
  return (
    <section className="About" id="about">
      <div className="container About-wrapper">
        <div className="About-text">
            
            <h2>About Me </h2>
            
          <p>
            Hey, thanks for taking a look around! Anyways, I am a
            Pega Certified Senior System Architect fluent in Java with
            experience as a front end developer. I Leverage Pega's resources in
            order to design, develop, and test applications based on Direct Capture of Objectives and Agile Workbench requirements.
            I have Utilized Java, JavaScript, HTML, CSS, Bootstrap, and PostgreSQL to develop and implement full-stack applications as part of an Agile Scrum environment. If you would like to see more of my front-end work have a look at my old portfolio page at <a
            target="_blank"
            title="old portfolio page at martinezandy.com"
            rel="noopener noreferrer"
            href="https://martinezandy.com/">
           martinezandy.com
          </a> where I have old projects available.
          </p>
          <br />
          
        </div>

        <div className="About-list">
          <ul>
            <li>Pega</li>
            <li>React</li>
            <li>CSS </li>
            <li>HTML</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>

      <div className="container About-wrapper">
        <div className="About-education">
          <h4>Education</h4>
          <p>
            <strong>BA Computer Science</strong>
            <br />
            Florida International University
            <br />
            Miami, FL
            <br />
          </p>
          <br />

          <p>
            <strong>Full Stack Web Development Bootcamp</strong>
            <br />
            4Geeks Academy
            <br />
            Miami, FL
            <br />
          </p>
          <br />

          <p>
            <strong>BS Criminal Justice</strong>
            <br />
            Florida International University
            <br />
            Miami, FL
            <br />
          </p>
          <br />
        </div>
        <div className="About-certs">
          <img
            src="https://github.com/amart31/andymartinez/blob/master/src/img/SSAlogo.png?raw=true"
            alt="PCSSA logo"
            className="pega-img mb-1"
          />
        </div>
        <div className="About-certs">
          <img
            src="https://github.com/amart31/andymartinez/blob/master/src/img/PegaCertPro.png?raw=true"
            alt="Certified professional Pega logo"
            className="pega-img m-2"
          />
        </div>
        <div className="About-certs">
          <img
            src="https://github.com/amart31/andymartinez/blob/master/src/img/PegaBAlogo.png?raw=true"
            alt="pega CBA logo"
            className="pega-img mt-1"
          />
        </div>
      </div>
    </section>
  );
}
