import styled from "styled-components";
import { textLRegular, titleL } from "../../styles/fonts";

export const SuccessStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin-top: 5rem;

  .success-body {
    width: 77%;
    max-width: 70rem;
    display: flex;
    flex-direction: column;

    h2 {
      ${titleL}
      color: ${({ theme }) => theme["yellow-dark"]}
    }

    .success-subtitle {
      ${textLRegular}
      color: ${({ theme }) => theme["base-subtitle"]}
    }

    .success-items {
      display: flex;
      justify-content: space-between;
    }

    .success-informations-gradients {
      margin-top: 2.5rem;
      width: 32.875rem;
      height: 16.875rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px 36px 6px 36px;

      background: linear-gradient(
        120deg,
        rgba(219, 172, 44, 1) 0%,
        rgba(128, 71, 248, 1) 100%
      );

      .success-informations {
        width: 32.813rem;
        height: 16.75rem;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        gap: 2rem;
        border: 1px;
        border-radius: 6px 36px 6px 36px;
      }
    }
  }
`;
