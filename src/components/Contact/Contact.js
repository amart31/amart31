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



        <form action="https://formspree.io/martinez1751@gmail.com" className="form" method="POST">
        <div className="form-title">
          <h4 className="pb-1">Get in Touch</h4>
        </div>

        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Your Name"
            id="name"
            requiered="true"
          />
        </div>
        <div className="form__group">
          <input
            type="email"
            className="form__input"
            placeholder="Your Email"
            id="email"
            requiered="true"
          />
        </div>
        <div className="form__group">
          <textarea
            type="text"
            className="form__input"
            placeholder="Say Hello"
            id="message"
            requiered="true"
          />
        </div>
        <button className='button button-Contact' onClick={handleSubmit}>
                  Submit
                </button>
      </form>

            
        </div>
        
        </section>
    )
}