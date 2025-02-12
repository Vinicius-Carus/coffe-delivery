import styled from "styled-components";
import { textMRegular, textS, titleXS } from "../../../styles/fonts";

export const CheckoutFormStyle = styled.div`
  width: 40rem;
  height: 42.375rem;
  margin-top: 2.5rem;
  h1 {
    ${titleXS}
  }

  .form-header {
    .form-header-title {
      display: flex;

      h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        ${textMRegular}
      }
    }

    .form-header-text {
      margin-left: 1.875rem;
      ${textS};
    }
  }

  .address-form {
    border-radius: 6px;
    margin-top: 0.938rem;
    background-color: ${({ theme }) => theme["base-card"]};
    padding: 2.5rem;
    min-height: 23.25rem;

    .address-form-body {
      margin-top: 2rem;

      .address-form-body-input {
        display: flex;
        gap: 0.75rem;
        margin-top: 1rem;
      }
    }
  }

  .payment-form {
    border-radius: 6px;
    padding: 2.5rem;
    margin-top: 0.75rem;
    background-color: ${({ theme }) => theme["base-card"]};
    height: 12.938rem;
    margin-bottom: 1rem;

    .payment-form-body {
      margin-top: 2rem;
      display: flex;
      gap: 0.75rem;
    }
  }
`;
