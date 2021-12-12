import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, figure {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
  }


  [data-theme="dark"] {
    --background-layout: #1b1732;
    --text-color: #fcfcfc;
  }

  [data-theme="light"] {
    --background-layout: #ecedf3;
    --text-color: #040716;
  }
`;
