import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button, a {
    filter: brightness(0.9);
  }
`