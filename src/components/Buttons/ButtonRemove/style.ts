import styled, { RuleSet } from "styled-components";
import { buttonMFont } from "../../../styles/fonts";

export interface IButtonRemoveStyleProps {
  $width?: string;
  $height?: string;
  $font?: RuleSet<object>;
}

export const ButtonRemoveStyle = styled.button<IButtonRemoveStyleProps>`
  width: ${(props) => props.$width || "5.688rem"};
  height: ${(props) => props.$height || "2rem"};
  background: ${(props) => props.theme["base-button"]};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme["base-text"]};

  ${(props) => props.$font || buttonMFont};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  &:not(:disabled):hover {
    background: ${(props) => props.theme["base-hover"]};
    transition: 0.2s;
    cursor: pointer;

    svg {
      fill: ${(props) => props.theme["purple-dark"]};
    }
  }

  &:disabled {
    background: ${(props) => props.theme["base-hover"]};
    cursor: not-allowed;
  }
`;
