import styled from "styled-components";
import { buttonMFont } from "../../../styles/fonts";

export interface ISelectButtonStyleProps {
  $width?: string;
  $height?: string;
}

export const SelectButtonStyle = styled.div<ISelectButtonStyleProps>`
  input[type="radio"] {
    display: none;
  }

  label {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    padding-left: 1rem;
    gap: 0.75rem;
    width: ${(props) => props.$width || "11.188rem"};
    height: ${(props) => props.$height || "3.188rem"};
    border-radius: 6px;
    border: 2px solid transparent;
    color: ${(props) => props.theme["base-subtitle"]};
    background-color: ${(props) => props.theme["base-button"]};
    cursor: pointer;
    transition: all 0.2s;
    ${buttonMFont}
    text-transform: uppercase;
  }

  input[type="radio"]:checked + label {
    border: 2px solid ${(props) => props.theme["purple"]};
    background-color: ${(props) => props.theme["purple-light"]};
  }

  label:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;
