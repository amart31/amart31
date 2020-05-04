import React from 'react';
import './About.scss';

export function About() {
    return (
        <section className='About' id='about'>
            <div className='container About-wrapper'>
                <div className='About-text'>
                    <h2>
                        About Me
                    </h2>
                   
                    <p>
                    Hey you! thanks for taking a look at my portfolio! Anyways, I am a Pega Certified Senior System Architect fluent in Java with experience as a front end developer. I Leverage Pegas resources in order to design, develop, and test applications that account for client-customer interactions, organization-employee exchanges, and reports useful for analyzing organizational goals and objectives. Also, I have Utilized Java, JavaScript, HTML, CSS, Bootstrap, Gatsby, GraphQL and PostgreSQL to develop and improve full-stack dynamic web applications while collaborating with peers as part of an Agile Scrum environment.
                  </p>
                  <br />
                  <p>
                  After initially attending college with the intention of going to law school and becoming a lawyer, I decided to pursue my interest in coding and enrolled in 4Geeks Academy Bootcamp in partnership with Miami Dade College. I was fortunate to learn on demand and fundamental front end technologies like HTML, CSS, React, and Javascript along with more advanced topics such as Rest APIs and Authentication. This allowed to start my career as a front end developer where I would later start working with Java and Pega to develop and test enterprise application. I am currently pursuing a BA in Computer Science from Florida International University. 
                  </p>
                </div>

                <div className='About-list'>
                <h4> Knowledge Areas</h4>
                <ul>
                <li>Pega</li>
                <li>React</li>
                <li>Java</li>
                <li>Rest APIs</li>
                <li>Javascript</li>
                <li>PostgreSQL</li>
                <li>GraphQL</li>
                <li>Node</li>
                <li>Express</li>
                <li>CSS </li>
                <li>Sass</li>
                <li>JUnit</li>
                </ul>
                </div>
                </div>
               
            <div className='container About-education'>
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
        </section>
    );
}