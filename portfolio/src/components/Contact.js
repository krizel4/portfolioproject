import React from 'react';

function ContactForm() {
  return (
    <div id='contact'>
      <form>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default ContactForm
