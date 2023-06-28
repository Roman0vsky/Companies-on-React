import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #ff0000;
    --secondary: #0075ff;
    --text-secondary: #999;
    font-size: 16px;
  }

  @media (max-width: 1500px) {
    :root {
      font-size: 12px;
    }
  }

  @media (max-width: 800px) {
    :root {
      font-size: 10px;
    }
  }

  @media (max-width: 400px) {
    :root {
      font-size: 8px;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default GlobalStyles;
