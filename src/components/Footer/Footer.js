import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const date = new Date();

export function Footer() {
    return (
        <footer className='Footer'>
        <div className='container'>
          <div className='Footer-links'>
            <h2 className='purple'>Andy Martinez</h2>
            <div className='social-links'>
              <div className='Footer-social'>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/amart31" className='Footer-social-i'>
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
               
              </div>
              <div className='Footer-social'>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amart1751/" className='Footer-social-i'>
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
                
              </div>
              <div className='Footer-social'>
                <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/amart1751' className='Footer-social-i'>
                  <FontAwesomeIcon icon={faTwitter} size='2x' />
                </a>
              </div>
            </div>
          </div>
          <div className='Footer-legal-band'>
            &copy;{date.getFullYear()} <span className='purple'>Andy Martinez</span>
          </div>
        </div>
      </footer>
    );
}