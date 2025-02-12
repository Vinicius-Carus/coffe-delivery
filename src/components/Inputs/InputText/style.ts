import styled from "styled-components";
import { roboto130LineHeight } from "../../../styles/fonts";
import { unselectText } from "../../../styles/utils";

export interface IInputTextStyleProps {
  $width?: string;
}

export const InputTextStyle = styled.div<IInputTextStyleProps>`
  width: ${(props) => props.$width || "27.125rem"};
  position: relative;

  span {
    display: none;
    ${unselectText}
  }

  input {
    width: 100%;
    padding: 0.75rem;
    background-color: ${(props) => props.theme["base-input"]};
    border: 1.5px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;

    &:not(:required) + span {
      display: inline-block;
      position: absolute;
      bottom: 0.75rem;
      right: 0.75rem;
      ${roboto130LineHeight}
      font-size: 0.75rem;
      font-style: italic;
      color: ${(props) => props.theme["base-label"]};
      pointer-events: none;
    }

    &:active,
    &:focus {
      border-color: ${(props) => props.theme["yellow-dark"]};
      box-shadow: none;
    }

    &:not(:placeholder-shown) + span {
      display: none;
    }
  }
`;
