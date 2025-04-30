import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

  html, body {
    margin: 0;
    padding: 0;
    color: #000;
    background-color: rgb(255, 228, 232);

  }

  h1 {
  display: flex;
  justify-content: center;
    font-family: verdana;
    margin: 0 0 16px;
    font-size: 48px;
  }

  p {
    font-family: Hind;
    font-weight: 400;
    line-height: 1.6;
    margin: 0 0 16px;
  }

`;
