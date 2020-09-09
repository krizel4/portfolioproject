import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import PropTypes from "prop-types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });


  const ResumeButton = (props) => {
    const { className, onClick, label, isDisabled } = props;
    return (
      <button onClick={onClick}>
        <span className={className} disabled={isDisabled}>
          <span>
            <AnchorLink href="#">{label}</AnchorLink>
          </span>
        </span>
      </button>
    );
  };

  ResumeButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
  };

  ResumeButton.defaultProps = {
    className: "cta",
    onClick: null,
    label: "Download CV",
    isDisabled: false,
  };



  return (
    <>

      <NavBar style={barAnimation} id='navBar'>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <AnchorLink href="#about">about</AnchorLink>
            <AnchorLink href="#experience">experience</AnchorLink>
            <AnchorLink href="#projects">projects</AnchorLink>
            <AnchorLink href="blog.html">blog</AnchorLink>
            <AnchorLink href="#contact">contact</AnchorLink>
            <ResumeButton href="resume.pdf" class="button" />
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #e9ded8;
  z-index: 1;
  font-size: 14px;
  font-family: "Cartograph CF", Menlo, Monaco, Consolas, monospace;
  align-items: center;
  justify-content: space-between;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

const NavLinks = styled(animated.ol)`
  justify-self: end;
  list-style-type: decimal;
  counter-increment: 1;
  margin: auto 0;

  & a {
    color: #9B867F;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;

    &:hover {
      color: #363c3c;
      /* border-bottom: 7px solid #B25B30; */
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
