import styled, { RuleSet } from "styled-components";
import { buttonGFont } from "../../../styles/fonts";

export interface IButtonStyleProps {
  $width?: string;
  $height?: string;
  $font?: RuleSet<object>;
}

export const ButtonStyle = styled.button<IButtonStyleProps>`
  width: ${(props) => props.$width || "8.25rem"};
  height: ${(props) => props.$height || "3rem"};
  background: ${(props) => props.theme["yellow"]};
  border: none;
  border-radius: 6px;
  color: #ffffff;
  ${(props) => props.$font || buttonGFont};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["yellow-dark"]};
    transition: 0.2s;
    cursor: pointer;
  }

  &:disabled {
    background: ${(props) => props.theme["yellow-light"]};
    cursor: not-allowed;
  }
`;
