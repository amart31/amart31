import React, { useState } from 'react';

import './Contact.scss';

export function Contact() {
    const [name, email, message] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Form submitted`);
    };

    return (
        <section className='Contact' id='contact'>
        <div className='container Contact-wrapper'>
            <div className='Contact-title'>
                <div className='contact-title-top'>Send me a message! We can talk today
                </div>
                
                <form onSubmit={handleSubmit}>

                <input
                type="text"
                className='Contact-input'
                name='contact-name'
                value={name}
                
              />
              <input
              type='email'
                className='Contact-input'
                name='contact-email'
                value={email}
                
              />
              <textarea
                className='Contact-input'
                name='contact-message'
                value={message}
                
              />
                
        
                <button className='button button-Contact' onClick={handleSubmit}>
                  Submit
                </button>
              </form>
              </div>
            
        </div>
        
        </section>
    )
}