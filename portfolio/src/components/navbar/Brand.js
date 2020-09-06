import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Brand = () => {
  return (
    <div>
      <AnchorLink href='#krizel'>
        <img
          src={require('../../assets/branding/nav_logo.png')}
          alt='Krizel.dev'
          class='logo_nav'
        />
      </AnchorLink>
      {/* <h2 class='logo_nav'>Krizel</h2> */}
    </div>
  );
};

export default Brand;
