import React from 'react'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import FeaturedWork from './Work'
import ContactForm from './Contact'
import Footer from './Footer'

function MainContent() {
  return (
    <div class='container'>
      <Header />
      <About />
      <Experience />
      <FeaturedWork />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default MainContent
