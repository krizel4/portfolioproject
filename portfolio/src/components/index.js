import React from 'react'
import About from './About'
import FeaturedWork from './Work'
import Experience from './Experience'
import ContactForm from './Contact'

function MainContent() {
  // const url='http://placekitten.com/600/400';
  return (
    <div class='container'>
      {/* <p>
                <img src={url} alt='placeholder-img' />
            </p> */}
      <span role='img' aria-label='girl behind computer'><h1>👩🏽‍💻</h1></span>
      <br /><br/><br/>
      <h1>Hi, there.</h1>
      <br />
      <h2>I'm Krizel.</h2>
      <p>
        I’m a software engineer with a background in digital marketing. I’m
        based in Los Angeles, CA and I specialize in designing
        elegant and efficient websites and applications.
      </p>
      <About />
      <Experience />
      <FeaturedWork />
      <ContactForm />
    </div>    // This ends the container.
  );
}

export default MainContent
