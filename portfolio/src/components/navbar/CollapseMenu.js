import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <Nav>
          <li><a href='#about' onClick={props.handleNavbar}>about</a></li>
          <li><a href='#experience' onClick={props.handleNavbar}>experience</a></li>
          <li><a href='#featured-works' onClick={props.handleNavbar}>featured works</a></li>
          <li><a href='blog.html' onClick={props.handleNavbar}>blog</a></li>
          <li><a href='#contact' onClick={props.handleNavbar}>contact</a></li>

          {/* Need to include button to highlight CV */}
        </Nav>

      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const Nav = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
