import styled from "styled-components";
import { textMRegular } from "../../../styles/fonts";
import { unselectText } from "../../../styles/utils";

export interface IInputNumberStyleProps {
  $width?: string;
  $height?: string;
}

export const InputNumberStyle = styled.div<IInputNumberStyleProps>`
  width: ${(props) => props.$width || "4.5rem"};
  height: ${(props) => props.$height || "2rem"};
  position: relative;

  div {
    width: 100%;
    height: ${(props) => props.$height || "2rem"};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    ${unselectText}
    ${textMRegular}
  }

  #minus,
  #plus {
    position: absolute;
    height: ${(props) => props.$height || "2rem"};

    svg {
      fill: ${(props) => props.theme["purple"]};
    }

    &:hover svg {
      fill: ${(props) => props.theme["purple-dark"]};
    }
    cursor: pointer;
  }

  #minus {
    display: flex;
    justify-items: center;
    align-items: center;
    padding-left: 0.5rem;
  }

  #plus {
    top: 0;
    right: 0.531rem;
    display: flex;
    align-items: center;
  }
`;
