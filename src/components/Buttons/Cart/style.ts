import styled from "styled-components";
import { textXS } from "../../../styles/fonts";

export interface ICartStyleProps {
  $width?: string;
  $height?: string;
}

export const CartStyles = styled.button<ICartStyleProps>`
  position: relative;
  width: 2.375rem;
  height: 2.375rem;
  cursor: pointer;
  border: none;
  background: ${(props) => props.theme["yellow-light"]};

  width: ${(props) => props.$width || "2.375rem"};
  height: ${(props) => props.$height || "2.375rem"};
  border-radius: 6px;

  .products-quantity {
    ${textXS}
    position: absolute;
    background-color: red;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    top: -0.5rem;
    right: -0.531rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["white"]};
  }
`;
