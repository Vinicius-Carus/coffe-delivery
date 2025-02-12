import styled from "styled-components";
import { textMBold, textMRegular } from "../../../styles/fonts";

export interface ICartCardStyleProps {
  $width?: string;
  $height?: string;
}

export const CartCardStyle = styled.div<ICartCardStyleProps>`
  height: ${({ $height }) => $height || "5rem"};
  width: ${({ $width }) => $width || "23rem"};
  background-color: ${({ theme }) => theme["base-card"]};
  display: flex;

  justify-content: space-between;

  .image-div {
    display: flex;
    align-items: center;
    margin: 0.5rem 0 0.5rem 0.25rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }

  .title-actions-div {
    width: 12rem;
    height: ${({ $height }) => $height || "5rem"};
    margin-left: 1.25rem;
    display: flex;
    flex-direction: column;

    .title-div {
      ${textMRegular}
      margin-top: 0.594rem;
    }

    .actions-div {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
  }

  .price-div {
    margin-right: 0.25rem;
    margin-top: 0.5rem;

    width: 5rem;
    ${textMBold}
    text-align: right;
  }
`;
