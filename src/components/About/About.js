import React from 'react';
import './About.scss';

export function About() {
    return (
        <section className='About'>
            <div className='container About-wrapper'>
                <div className='About-text'>
                    <h2>
                        About Me
                    </h2>
                   
                    <p>
                    I am a Pega Certified Senior System Architect fluent in Java with experience as a front end developer. I have Leveraged Pegas resources in order to design, develop, and test applications that account for client-customer interactions, organization-employee interactions, and reports useful for analyzing organizational goals and objectives. Utilized Java, JavaScript, HTML, CSS, Bootstrap, and PostgreSQL to develop and improve full-stack dynamic web applications while collaborating with peers as part of an Agile Scrum environment.
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
                <li>CSS and Sass</li>
                <li>JUnit</li>
                </ul>
                </div>
                </div>
               
            <div className='About-education'>
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