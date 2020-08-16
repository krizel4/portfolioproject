import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

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
        font-family: 'Montserrat', sans-serif;
    }

body {
    margin: 0;
    font-family: -apple-system, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
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
    font-family: lust-display, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 20px 0;
    display: inline-block;
    font-size: 44px;
    margin: 10px;
    /* Add an underline to fill up gap between h1 and proceeding content. */
  }

  h2 {
    font-family: lust-display, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    line-height: 3rem;
    font-style: italic;
    font-size: 34px;
    margin: 10px;
  }

  p {
    font-family: 'Cartograph CF', 'Courier New', Courier, monospace;
    line-height: 2.85ex;
    font-size: 16px;
    margin: 10px;
  }

  /* shapes and buttons */

  /* input fields */

  /* Media queries */
`;

export default GlobalStyles