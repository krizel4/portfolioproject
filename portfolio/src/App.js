import React, { Component } from 'react';
import './App.css';
import MainContent from './components/index';
import Navbar from './components/navbar/Navbar';
import GlobalStyle from './styles/Global';
import './index.css';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <MainContent />
        </>
    )
  }
}

export default App
