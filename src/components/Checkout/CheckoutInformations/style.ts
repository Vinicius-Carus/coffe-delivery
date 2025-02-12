import styled from "styled-components";
import { textLBold, textS, titleXS } from "../../../styles/fonts";

export const CheckoutInformationsStyle = styled.div`
  margin-top: 2.5rem;

  h1 {
    ${titleXS}
  }

  .info-body {
    box-sizing: border-box;
    margin-top: 0.938rem;
    padding: 2.5rem;
    width: 28rem;
    min-height: 23.125rem;
    background-color: ${({ theme }) => theme["base-card"]};
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;

    .info-products {
      hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid ${({ theme }) => theme["base-button"]};
        margin: 1.5rem 0;
        padding: 0;
      }

      .info-products-empty {
        text-align: center;
        margin: 2.5rem;
        color: ${({ theme }) => theme["base-hover"]};
        ${textLBold};
      }
    }

    .info-price {
      ${textS}
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      p {
        display: flex;
        justify-content: space-between;
      }

      .info-price-total {
        ${textLBold}
      }

      button {
        margin-top: 0.75rem;
        width: 100%;
      }
    }
  }
`;
