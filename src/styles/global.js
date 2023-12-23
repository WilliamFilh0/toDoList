import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    -webkit-font-smoothing: antialiased;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }


  body, input, button, textArea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;
  }

  button, a {
    filter: brightness(0.9);
  }
`;
