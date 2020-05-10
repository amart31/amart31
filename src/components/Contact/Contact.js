import React, { useState } from 'react';

import './Contact.scss';

export function Contact() {
    const [name, updateName] = useState('');
    const [email, updateEmail] = useState('');
    const [message, updateMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Form submitted`);
    };

    return (
        <section className='Contact' id='contact'>
          <div className='container Contact-wrapper'>
            <form action="https://formspree.io/martinez1751@gmail.com" className="form" method="POST">

              <label htmlFor="name" className="form__group">
                Name
                <input
                  className="form__input"
                  requiered="true"
                  id="name"
                  value={name}
                  placeholder="Your Name"
                  onChange={e => updateName(e.target.value)}
                  onBlur={e => updateName(e.target.value)}
                />
            </label>

            <label htmlFor="email" className="form__group" >
              Email
              <input
                className="form__input"
                requiered="true"
                type="email"
                id="email"
                value={email}
                placeholder="Your Email"
                onChange={e => updateEmail(e.target.value)}
                onBlur={e => updateName(e.target.value)}

              />
            </label>

            <label htmlFor="message" className="form__group">
              Message
              <textarea
                className="form__input"
                requiered="true"
                id="message"
                value={message}
                placeholder="Your Message"
                onChange={e => updateMessage(e.target.value)}
                onBlur={e => updateName(e.target.value)}

              />
            </label>
            <button className='button button-Contact' onClick={handleSubmit}>
              Submit
            </button>
          </form> 
          </div>       
        </section>
    )
}