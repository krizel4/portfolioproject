import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'LeituraDisplay-Roman';
  src: local('LeituraDisplay-Roman')
      url('./assets/webfonts/LeituraDisplay-Roman/font.woff2') format('woff2'),
      url('./assets/webfonts/LeituraDisplay-Roman/font.woff') format('woff');
}

*,
*::after,
*::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
}

body {
    margin: 0;
    font-family: 'Cartograph CF', 'Courier New', Courier, monospace;
    font-style: italic;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

.text-content {
    margin: 0;
    font-family: 'Cartograph CF', 'Courier New', Courier, monospace;
    font-style: italic;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* background colors
  template colors */

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .container {
    padding: 10vw;
    text-align: left;
    width: 800px;
  }

  h1 {
    font-family: 'Leitura Display Swashes', Cambria, Cochin, Georgia, Times, serif;
    margin: 20px 0;
    display: inline-block;
    font-size: 44px;
    margin: 10px;
    font-style: italic;
    /* Add an underline to fill up gap between h1 and proceeding content. */
  }

  h2 {
    font-family: 'Leitura Display Roman', Cambria, Cochin, Georgia, Times, serif;
    line-height: 3rem;
    font-size: 34px;
    margin: 10px;
  }

  p {
    font-family: 'Cartograph CF', 'Courier New', Courier, monospace;
    line-height: 2.85ex;
    font-size: 16px;
    margin: 10px;
  }

  .logo_nav {
    color: #ffffff;
    font-family: 'Leitura Display Roman', Cambria, Cochin, Georgia, Times, serif;
    margin: 20px 0;
    display: inline-block;
    font-size: 34px;
    margin: 10px;
    width: 40px;
  }

  /* shapes and buttons */
  /* .button {
        border: 1px solid #ffffff;
        padding: 7px;
        text-align: center;
      }
  .button:hover {
        background-color: #ffffff;
        color: #dcdcd3;
      } */

  .button {
    background-color:#0D3D3D;
    border-radius:4px;
    border:1px solid #ffffff;
    display:inline-block;
    color:#ffffff;
    padding:7px;
    border-bottom-style: solid !important;
    border-bottom-width: 1px !important;
    border-bottom-color: #ffffff !important;
    text-align: center;
}
.button:hover {
  	background-color:#e9ded8;
}
.button:active {
    position:relative;
    top:1px;
}

  /* input fields */

  /* Media queries */
`;

export default GlobalStyles
