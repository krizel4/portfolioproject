import React from 'react';

function ContactForm() {
  return (
    <div id='contact' class='resume-section'>
      <h1>Get In Touch</h1>
      <form id='contact' action='mailto:hello@krizel.dev' method='post'>
        <input
          placeholder='First Name'
          type='text'
          tabindex='1'
          required
          autofocus
        />
        <input
          placeholder='Last Name'
          type='text'
          tabindex='2'
          required
          autofocus
        />
        <br />
        <input placeholder='Email Address' type='email' tabindex='3' required />
        <br />
        <textarea placeholder='Your Message' tabindex='4' required></textarea>
        <br />
        <button
          name='submit'
          type='submit'
          id='contact-submit'
          data-submit='...Sending'
          tabindex='5'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
