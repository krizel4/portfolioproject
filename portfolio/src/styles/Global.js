import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url("//hello.myfonts.net/count/3c250d");

    @font-face {
      font-family: 'LeituraDisplay-Swashes';
      src: url('webFonts/LeituraDisplay-Swashes/font.woff2') format('woff2'), url('webFonts/LeituraDisplay-Swashes/font.woff') format('woff');
    }
    @font-face {
      font-family: 'LeituraDisplay-Roman';
      src: url('webFonts/LeituraDisplay-Roman/font.woff2') format('woff2'), url('webFonts/LeituraDisplay-Roman/font.woff') format('woff');
    }
    @font-face {
      font-family: 'LeituraDisplay-Italic';
      src: url('webFonts/LeituraDisplay-Italic/font.woff2') format('woff2'), url('webFonts/LeituraDisplay-Italic/font.woff') format('woff');
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
        box-sizing: border-box;
        font-family: 'Cartograph CF', sans-serif;
    }


    @font-face {
  font-family: 'Leitura-Display';
  src: local('MyFont'), url(./fonts/MyFont.woff) format('woff');
}

body {
    margin: 0;
    font-family: 'Cartograph CF', 'Courier New', Courier, monospace;
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
    font-family: 'LeituraDisplay-Roman', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 20px 0;
    display: inline-block;
    font-size: 44px;
    margin: 10px;
    /* Add an underline to fill up gap between h1 and proceeding content. */
  }

  h2 {
    font-family: 'LeituraDisplay-Swashes', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
  }

  /* shapes and buttons */

  /* input fields */

  /* Media queries */
`;

export default GlobalStyles;
