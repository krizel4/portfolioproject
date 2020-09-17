import React from 'react';
import Button from './Button';

function Header() {
  return (
    <div id='krizel' class='resume-section'>
      <p class='text-content'>Hey there! I am</p>
      <h1>Krizel Minnema.</h1>
      <div>
        <h1 class='light_h1'>I love the simple things.</h1>
      </div>
      <p class='text-content'>
        I’m a front end software engineer with a background in digital
        marketing management. I’m based in Los Angeles, CA and I specialize in designing
        elegant and efficient websites and applications.
      </p>
      <div>
        <Button label='Learn More' href='#about' />
      </div>
    </div>
  );
}

export default Header;
