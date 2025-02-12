import styled from "styled-components";

export interface IMarketButtonStyleProps {
  $width?: string;
  $height?: string;
}

export const MarketButtonStyle = styled.button<IMarketButtonStyleProps>`
  background: ${(props) => props.theme["purple-dark"]};

  border: none;
  width: ${(props) => props.$width || "2.375rem"};
  height: ${(props) => props.$height || "2.375rem"};
  border-radius: 6px;

  &:not(:disabled):hover {
    background: ${(props) => props.theme["purple"]};
    cursor: pointer;
    transition: 0.2s;
  }

  &:disabled {
    background: ${(props) => props.theme["purple-light"]};
    cursor: not-allowed;
  }
`;
