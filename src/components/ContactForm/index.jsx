import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mn3xqcl', 'template_9p03dgj', form.current, 'fwvXxyfAZ0AQmnAlo')
      .then(() => {
          alert('Success')
      }, (error) => {
          alert('Failed')
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>

      <input
        type="text"
        name="phone"
        placeholder="Phone (without parentheses and spaces)"
      />
      <textarea
        name="message"
        placeholder='Message'
      />
      <button type="submit">Submit</button>
    </form>
  )
}
