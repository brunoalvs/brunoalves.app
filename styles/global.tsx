import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Fira Sans Condensed';
    font-weight: 300;
    src: url('/fonts/FiraSansCondensed-Light.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Fira Sans Condensed';
    font-weight: normal;
    src: url('/fonts/FiraSansCondensed-Regular.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Fira Sans Condensed';
    font-weight: bold;
    src: url('/fonts/FiraSansCondensed-Bold.woff2') format('woff2');
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: 'Fira Sans Condensed', sans-serif;
    font-display: swap;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, figure {
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--primary-color);
  }


  [data-theme="dark"] {
    --background-layout: linear-gradient(171.9deg, #1B1732 0%, #0A0813 100%);
    --background-topheader: #000000;
    --background-navmenu: linear-gradient(171.9deg, #0A0813 0%, #000000 100%);
    --text-color: #fcfcfc;
    --primary-color: #8368EE;
    --primary-color-hover: #a287f8;
    --secondary-color:  #68EEB6;
    --input-language-bg: #35C789;
    --input-language-dot: #fff;
  }

  [data-theme="light"] {
    --background-layout: #ecedf3;
    --background-topheader: #FBFBFC;
    --background-navmenu: #F6F6FC;
    --text-color: #040716;
    --primary-color: #6A4CCE;
    --primary-color-hover: #8368EE;
    --secondary-color:  #35C789;
    --input-language-bg: #A3A9C2;
    --input-language-dot: #DDE0EA;
  }

  div#__next {
    min-height: 100vh;
  }
`
