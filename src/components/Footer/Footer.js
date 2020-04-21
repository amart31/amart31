import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer className='Footer'>
        <div className='container'>
          <div className='Footer-links'>
            <h2 className='purple'>Andy Martinez</h2>
            <div className='social-links'>
              <div className='Footer-cir'>
                <a href='instagram.com' className='Footer-cir-i'>
                  <FontAwesomeIcon icon={faGithub} size='2x' />
                </a>
              </div>
              <div className='Footer-cir'>
                <a href='facebook.com' className='Footer-cir-i'>
                  <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </a>
              </div>
              <div className='Footer-cir'>
                <a href='twitter.com' className='Footer-cir-i'>
                  <FontAwesomeIcon icon={faTwitter} size='2x' />
                </a>
              </div>
            </div>
          </div>
          <div className='Footer-legal-band'>
            &copy;2020 <span className='purple'>Andy Martinez</span>
          </div>
        </div>
      </footer>
    );
}