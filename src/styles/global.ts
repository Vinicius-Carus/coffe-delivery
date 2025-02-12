import { createGlobalStyle } from "styled-components";
import { unselectText } from "./utils";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme["base-text"]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px  ${(props) => props.theme["base-button"]};
  }

  button {
    ${unselectText}
  }
`;
