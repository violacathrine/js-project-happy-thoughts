import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color:rgba(224, 203, 200, 0.23);
}

  h1 {
    display: flex;
    justify-content: center;
    font-family: verdana;
    margin: 100px 0 16px;
    font-size: 48px;
    color:rgb(27, 159, 169);
  }

  p {
    font-family: Hind;
    font-weight: 400;
    line-height: 1.6;
    margin: 0 0 16px;
  }

`;
