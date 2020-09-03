import React from 'react';

const Brand = () => {
  return (
    <div>
      <a href='index.html'>
        <img
          src={require('../../assets/branding/nav_logo.png')}
          alt='Krizel.dev'
          class='logo_nav'
        />
      </a>
      {/* <h2 class='logo_nav'>Krizel</h2> */}
    </div>
  );
};

export default Brand;
